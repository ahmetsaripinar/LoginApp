import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator,Image } from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { assets } from "../src/img/assets.js"; // assets.js'den logo'yu import ettik

import { loadFonts } from "../src/utils/fonts.js";

const index = () => {

  const [fontsLoaded,setFontsLoaded] = useState(false);

 useEffect(() => {
   const loadAppFonts = async () => {
     try {
       console.log("Font yükleme başlıyor...");
       await loadFonts();
       console.log("Fontlar başarıyla yüklendi.");
       setFontsLoaded(true);
     } catch (error) {
       console.error("Font yüklenirken hata oluştu:", error);
     }
   };

   loadAppFonts();
 }, []);

  if(!fontsLoaded){
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={assets.header_img} style={styles.HeaderImage} />
      <Image source={assets.logo} style={styles.image} />
        <Text style={styles.title}>Lorem consecter ipsum</Text>
      {/* logo'yu doğru şekilde kullanıyoruz */}
      <Link href="./pages/welcome">Welcome Git</Link>
    </View>
  );
};  

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    alignItems: "center",
    marginTop: -40,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "relative",
    top: -100,
    width: 150,
    height: 40,
    objectFit: "contain",
  },
  HeaderImage: {
    width: 380,
    height: 400,
    objectFit: "contain",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#ff5806",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    width:250,
    padding: 12,
    alignItems: "center",
    borderRadius:20,
  },
});
