import KhaltiCheckout from "khalti-checkout-web";
import React from "react";
// import { useGlobalState } from "../state";
import MyKey from "./khaltiKey";
import axios from "axios";
import Cookies from "js-cookie";

export default function Khalti({ records }) {
  const username = Cookies.get("username");
  const package_value = Cookies.get('package_value');
//   const [productName] = useGlobalState("productName");
  let Config = {
    // replace this key with yours
    publicKey: MyKey.publicTestKey,
    productIdentity: "78",
    productName: "My E-commerce Store",
    productUrl: "http://localhost:3000",
    eventHandler: {
      onSuccess(payload) {
        console.log(payload);
        console.log(payload.mobile);
        let data = {
          token: payload.token,
          amount: payload.amount,
        };

        axios
          .post(
            `http://localhost:4000/verify?token=${payload.token}&amount=${payload.amount}&username=${username}&package_value=${package_value}`
          )
          .then((response) => {
            alert(
              "Congrats Your Transaction Has be Completed.For Details Please visit My Transactions on Navbar"
            );
          })
          .catch((error) => {
            console.log(error.response);
          });
        // console.log(payload);
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  let checkout = new KhaltiCheckout(Config);
  return (
    <div>
      <button
        onClick={() => checkout.show({ amount: records })}
        className="khalti main-btn"
      >
        Pay via Khalti First Then Upload
      </button>
    </div>
  );
}