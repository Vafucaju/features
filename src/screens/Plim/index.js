import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Card,
  AnimBorder,
  AnimBorderBefore,
  Wrap,
  Square,
  Content,
} from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import RNAnimatedBorder from "react-native-animated-border";
import { Animated, Button, Text, Easing, ImageBackground } from "react-native";
import ImageBG from "../../../assets/bg.png";

const Plim = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const [run, setRun] = useState(false);
  const NewImage = Animated.createAnimatedComponent(LinearGradient);
  const NewAnimBorderBefore =
    Animated.createAnimatedComponent(AnimBorderBefore);

  useEffect(() => {
    if (run)
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 2500,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
  }, [run]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "180deg", "360deg"],
  });
  const move = rotateAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "180deg", "360deg"],
  });

  const RodaRoda = () => (
    <Wrap>
      <NewImage
        style={{
          transform: [{ rotateZ: spin }],
          width: 314,
          height: 320,
          backgroundColor: "#fff",
          position: "absolute",
          zIndex: -1,
          borderRadius: 200,
        }}
        locations={[0.4, 0.6, 1]}
        colors={["#216CFD", "#fff", "#fff"]}
      />

      <Card />
    </Wrap>
  );

  const Roda2 = () => (
    <AnimBorder>
      <NewAnimBorderBefore style={{ transform: [{ rotateZ: spin }] }}>
        {/* <Square /> */}
        <LinearGradient
          colors={["#216CFD", "#216CFD", "#216CFD", "#fff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            width: "50%",
            height: "50%",
          }}
        />
      </NewAnimBorderBefore>
      <Content />
    </AnimBorder>
  );

  return (
    <>
      <Container>
        <Roda2 />
        <Roda2 />
      </Container>
      <Button title="rodar" onPress={() => setRun(!run)} />
    </>
  );
};

export default Plim;
