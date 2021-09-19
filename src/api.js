import firebase from "./firebaseConfig";
const db = firebase.default.firestore();

export default {
  signIn: async (name) => {
    const user = await db.collection("users").doc(name).get();

    if (!user.data()) {
      await db.collection("users").doc(name).set(
        {
          name,
          chats: [],
        },
        { merge: true }
      );
    }
  },
  getContactList: async (name) => {
    let list = [];
    let results = await db.collection("users").get();
    results.forEach((result) => {
      let data = result.data();

      if (result.id !== name) {
        list.push({ id: result.id, name: data.name });
      }
    });
    return list;
  },
  checkForChat: async (user, user2) => {
    let user1Info = await db.collection("users").doc(user.id).get();
    let chats1 = user1Info.data().chats;

    let user2Info = await db.collection("users").doc(user2.id).get();
    let chats2 = user2Info.data().chats;

    let user1ChatIDs = [];
    let user2ChatIDs = [];

    let existChat = false;

    chats1.forEach((item, i) => {
      user1ChatIDs.push(item.chatID);
    });

    chats2.forEach((item, i) => {
      user2ChatIDs.push(item.chatID);
    });

    const retorno = user1ChatIDs.filter((item, i) => item === user2ChatIDs[i]);

    if (retorno == 0) {
      existChat = false;
    } else {
      existChat = true;
    }
  },
  addNewChat: async (user, user2) => {
    let user1Info = await db.collection("users").doc(user.id).get();
    let chats1 = user1Info.data().chats;

    let user2Info = await db.collection("users").doc(user2.id).get();
    let chats2 = user2Info.data().chats;

    let user1ChatIDs = [];
    let user2ChatIDs = [];

    let existChat = false;

    chats1.forEach((item, i) => {
      user1ChatIDs.push(item.chatID);
    });

    chats2.forEach((item, i) => {
      user2ChatIDs.push(item.chatID);
    });

    // const retorno = user1ChatIDs.filter((item, i) => item === user2ChatIDs[i]);
    let retorno = [];
    user1ChatIDs.forEach((r) => {
      let i = -1;
      i++;
      if (r === user2ChatIDs[i]) {
        retorno.push(r);
      }
    });

    if (retorno.length === 0) {
      function makeid() {
        var text = "";
        var possible =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" +
          user.id +
          user2.id;

        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }

      const id = makeid();

      await db
        .collection("chats")
        .doc(id)
        .set({
          id,
          messages: [],
          users: [user.id, user2.id],
        });

      db.collection("users")
        .doc(user.id)
        .update({
          chats: firebase.default.firestore.FieldValue.arrayUnion({
            chatID: id,
            title: user2.name,
            with: user2.id,
          }),
        });

      db.collection("users")
        .doc(user2.id)
        .update({
          chats: firebase.default.firestore.FieldValue.arrayUnion({
            chatID: id,
            title: user.name,
            with: user.id,
          }),
        });
      return id;
    } else {
      return retorno[0];
    }
  },
  onChatList: (userID, setChatList) => {
    return db
      .collection("users")
      .doc(userID)
      .onSnapshot((doc) => {
        if (doc.exists) {
          let data = doc.data();

          if (data.chats) {
            setChatList(data.chats);
          }
        }
      });
  },
  onChatContent: (chatID, setMessages, setUsers) => {
    return db
      .collection("chats")
      .doc(chatID)
      .onSnapshot((doc) => {
        if (doc.exists) {
          let data = doc.data();
          setMessages(data.messages);
          setUsers(data.users);
        }
      });
  },
  sendMessage: async (chatData, userID, type, body, users) => {
    db.collection("chats")
      .doc(chatData.chatID)
      .update({
        messages: firebase.default.firestore.FieldValue.arrayUnion({
          type,
          author: userID,
          body,
          date: new Date(),
        }),
      });

    for (let i in users) {
      let u = await db.collection("users").doc(users[i]).get();
      let uData = u.data();

      if (uData.chats) {
        let chats = [...uData.chats];

        for (let e in chats) {
          if (chats[e].chatID === chatData.chatID) {
            chats[e].lastMessage = body;
            chats[e].lastMessageDate = new Date();
          }
        }

        await db.collection("users").doc(users[i]).update({
          chats,
        });
      }
    }
  },
};
