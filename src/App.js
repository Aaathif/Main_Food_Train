import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { blogInput, eventInput, menuListInput, paymentInput, payrollInput, productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, inventoryColumns, userColumns, MenuListColumns , PaymentColumns, PayrollColumns, BlogColumns, EventColumns} from "./datatablesource";
import NewHotel from "./pages/newHotel/NewHotel";
import NewProduct from "./pages/newProduct/NewProduct";
import NewMenuList from "./pages/newMenuList/NewMenuList";
import UpdatePayment from "./pages/UpdatePages/UpdatePayment/UpdatePayment";
import UpdateMenuList from "./pages/UpdatePages/UpdateMenuList/UpdateMenuList";
import UpdatePayroll from "./pages/UpdatePages/UpdatePayroll/UpdatePayroll";
import SalaryMain from "./components/Salary2/SalaryMain";
import UpdateBlog from "./pages/UpdatePages/UpdateBlog/UpdateBlog";
import NewBlog from "./pages/Adding Page/newBlog/NewBlog";
import UpdateEvent from "./pages/UpdatePages/UpdateEvent/UpdateEvent";
import NewEvent from "./pages/Adding Page/newEvent/NewEvent";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            {/* --------------------------------------------------------------------- */}
            
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* --------------------------------------------------------------------- */}

            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel  />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* --------------------------------------------------------------------- */}

            <Route path="product">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={inventoryColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewProduct  inputs={productInputs} title="Add New Products hello"/>
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* ----------------------------- Menu List ---------------------------------------- */}

            <Route path="menuList">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={MenuListColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewMenuList inputs={menuListInput} title="Add Menu or Offer" />
                  </ProtectedRoute>
                }
              />
              <Route
                path="update/:Id"
                element={
                  <ProtectedRoute>
                    <UpdateMenuList inputs={menuListInput} title="Update Menu List Details" />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* ----------------------------- Payment ---------------------------------------- */}

            <Route path="payment">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={PaymentColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":productId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="update/:Id"
                element={
                  <ProtectedRoute>
                    <UpdatePayment inputs={paymentInput} title="Update Payment Details" />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* ----------------------------- Payroll ---------------------------------------- */}

            <Route path="payroll">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={PayrollColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <SalaryMain />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":payrollId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="update/:Id"
                element={
                  <ProtectedRoute>
                    <UpdatePayroll inputs={payrollInput} title="Update Payroll Details" />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* -----------------------------Blog ---------------------------------------- */}

            <Route path="blog">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={BlogColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewBlog inputs={blogInput} title="Add Blog" />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":blogId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="update/:Id"
                element={
                  <ProtectedRoute>
                    <UpdateBlog inputs={blogInput} title="Update Blog Details" />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* -----------------------------Event ---------------------------------------- */}

            <Route path="event">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={EventColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewEvent inputs={eventInput} title="Add Event" />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":eventId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="update/:Id"
                element={
                  <ProtectedRoute>
                    <UpdateEvent inputs={eventInput} title="Update Event Details" />
                  </ProtectedRoute>
                }
              />
            </Route>
            


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
