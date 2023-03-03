import { Outlet, Link } from "react-router-dom";
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'
const Layout = () => {
  return (
    <>
      <Heading
        fontSize={[5, 6, 7]}
        color="#9333EA"
        mx={7}
      >
        Song Store
      </Heading>
      <Outlet />
    </>
  )
};

export default Layout;