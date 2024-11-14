import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import Banner from "../images/banner.jpeg";

const About = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` , color: "white"}}>
    <Layout>
      <Box
        sx={{
          my: 17,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography style={{ color: "black"}} variant="h2">Welcome To Depual Resturant</Typography>
        <p>
        Welcome to DePaul Restaurant's online food ordering platform, designed specifically for our college community. Our website provides a convenient and efficient way to browse through a variety of menu options, place orders, and have your meals delivered right to your doorstep or ready for pick-up. You can explore a wide selection of dishes, ranging from comfort food to more diverse, contemporary options. Each dish is crafted with quality ingredients to ensure a satisfying dining experience. The platform is user-friendly, allowing you to easily customize your order, select add-ons, and choose from a variety of payment options. We aim to offer a quick and reliable service, making your mealtime simpler and more enjoyable. With DePaul's online ordering, you can enjoy fresh, delicious meals without the hassle of leaving campus. Simply place your order, and we’ll take care of the rest.
        </p>
        <br />
        <p>
        Our goal at DePaul Restaurant’s online ordering platform is to provide a seamless experience for busy students, faculty, and staff. Whether you're cramming for exams or just craving a delicious meal between classes, we’ve got you covered. With real-time order tracking, you’ll always know when to expect your meal, making it perfect for those on a tight schedule. You can also take advantage of exclusive student discounts and special promotions available only through our website. Every order is prepared with care, and we strive to ensure that your food arrives fresh and hot, just the way you like it. From pizza and pasta to healthy salads and snacks, there's something for every taste and dietary preference. Want to try something new? Check out our weekly specials for unique dishes that change regularly. Our efficient customer service team is always available to assist you with any questions or concerns. Plus, we offer contactless delivery and pick-up options for added convenience and safety. DePaul Restaurant is more than just a meal—it’s a solution for satisfying your hunger with ease and quality, right at your fingertips.
        </p>
        <br />
        <p>
        With DePaul Restaurant’s online platform, you can easily reorder your favorite meals with just a few clicks, saving you time for more important things. We also offer group ordering options, perfect for study sessions or campus events. Enjoy a fast, reliable, and personalized dining experience that fits seamlessly into your college life. Join the DePaul community and make every meal more convenient, enjoyable, and stress-free with just a few taps!
        </p>
      </Box>
    </Layout>
    </div>
  );
};

export default About;
