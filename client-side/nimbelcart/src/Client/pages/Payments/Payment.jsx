import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import logo from "../../../Assets/nimbleCart_logo_rect.jpg";
import { Box, Button } from "@chakra-ui/react";

export const Payment = ({ price, myWidth })=> {
    const {name, userEmail} =[]

  const Razorpay = useRazorpay();
  const handlePayment = useCallback(async (price) => {
    const order = {
      currency: "INR",
      receipt:Date.now(),
    };

    const options = {
      key: "rzp_test_qho4K1vu3eyRqY",
      amount: Number(price*100),
      currency: "INR",
      name: "Nimble Cart Payment Portal",
      description: "Cart Transaction",
      image: logo,
      order_id: order.id,
      handler: (res) => {
        // alert
      },
      prefill: {
        name: name,
        email: userEmail,
        contact: "8637xxxxx6",
      },
      notes: {
        address: "Nimble cart Corporate Office",
      },
      theme: {
        color: "red",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);
  return (
    <Box  >
    <Button w={myWidth} colorScheme={"red"}
      onClick={() => {
        handlePayment(price);
        // alert("Purchase completed"+"\n"+`Order Id ${Date.now()}`)
      }}
    >
      Confirm Payment
    </Button>
  </Box>
   );
}