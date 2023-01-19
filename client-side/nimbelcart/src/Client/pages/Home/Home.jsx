import React from "react";
import { Image } from '@chakra-ui/react'

import GiftCards from './giftcards'
import data from './hompagedb.json'
const Home = () => {
  return <div>
 <GiftCards products={data.mens} heading="Men's Wear & Fashion"/>
      <GiftCards products={data.Womens} heading="Women's Wear & Fashion"/>
      <GiftCards products={data.child} heading="Kid's Wear & Fashion"/>


  </div>;
};

export default Home;
