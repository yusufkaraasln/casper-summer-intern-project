import React from "react";

import StripeCheckout from "react-stripe-checkout";

import axios from "axios";


function Pay() {
  const KEY =
    "pk_test_51LclbRE4Sd4iZeQiICJvk7yF8igkUD7oI4fBELiM3taZOH6ugK4hFaid40NTC4DqpSSxaLkTgKqjaCO80r6k8BJR00gWzr1XqP";

  const [sToken, setSToken] = React.useState(null);

  const onToken = (token) => setSToken(token);
  React.useEffect(() => {
      const request = async () => {
          try {
              const res = await axios.post("http://localhost:8080/api/checkout/payment", {
                  tokenId: sToken?.id,
                  amount: 23000,
                });
                
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        
        request();
        console.log(sToken?.id);

  }, [sToken]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <StripeCheckout
        name="Excalibur Store"
        image="https://www.casper.com.tr/uploads/2021/02/excalibur-wallpaper-04.jpg"
        billingAddress
        shippingAddress
        description="Toplam 23.000 TL"
        amount={23000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
            width: "200px",
            height: "50px",
            cursor: "pointer",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            outline: "none",
            fontFamily: "sans-serif",
          }}
        >
          Pay
        </button>
      </StripeCheckout>
    </div>
  );
}

export default Pay;
