import { Elements } from "@stripe/react-stripe-js";
import useClass from "../../hooks/useClass";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
console.log("stripe", stripePromise);

const Payment = () => {
    const pay = useLoaderData();
    console.log(pay);
    // const [classes] = useClass();
    // console.log("classes", classes);

    // const total = classes.price;
    // console.log("total price", total);

    return (
        <div className="mt-20 mx-8">
            <Elements stripe={stripePromise}>
                {/* <CheckOutForm
                    classes={classes}
                    total={total}
                ></CheckOutForm> */}
            </Elements>
        </div>
    );
};

export default Payment;
