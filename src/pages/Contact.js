import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import Banner from "../images/banner.jpeg";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <div style={{ backgroundImage: `url(${Banner})` , color: "white"}}>
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography style={{ color: "black"}} variant="h2">Contact Depual Restaurant</Typography>
        <p>
        The Contact page for DePaul Online Food Ordering is your go-to place for any questions, concerns, or feedback. Our dedicated support team is available to assist you with order issues, delivery inquiries, or menu recommendations. You can easily reach us via email, phone, or by filling out the contact form. We value your feedback and strive to improve your dining experience with every order. Whether you have a special request or need help navigating our site, we're here to ensure your satisfaction. Don't hesitate to get in touch—we look forward to hearing from you!
        </p>
      </Box>
      <Box
        sx={{
          my: 11.5,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
    </div>
  );
};

export default Contact;
