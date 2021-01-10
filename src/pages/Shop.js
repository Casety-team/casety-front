import React from "react";
import AuthService from "../services/auth.service";

const Shop  = () => {
  const currentUser = AuthService.getCurrentUser();
  
  return (
  <>
    {!currentUser ? (
      <a href="/login">Go login</a>
    ) : (
      <a href="/buy/1">Buy</a>
    )} 
  </>
  )
}

export default Shop;