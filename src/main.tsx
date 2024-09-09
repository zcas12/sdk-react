import ReactDOM from "react-dom/client";
import { IndexPage } from "./pages";
import { OrderPage } from "./pages/order";
import { SuccessPage } from "./pages/success";
import { FailPage } from "./pages/fail";
import { TransRegPage } from "./pages/mobile/transReg";
import { MobileOrderPage } from "./pages/mobile/order";
import { MobilePaymentPage } from "./pages/mobile/payment";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
    },
    {
        path: "/order",
        element: <OrderPage />,
    },
    {
        path: "/success",
        element: <SuccessPage />,
    },
    {
        path: "/fail",
        element: <FailPage />,
    },
    {
        path: "/mobile/trans-reg",
        element: <TransRegPage />,
    },
    {
        path: "/mobile/order",
        element: <MobileOrderPage />,
    },
    {
        path: "/mobile/payment",
        element: <MobilePaymentPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
);