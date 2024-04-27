import React from "react";
import ContactF from "@/components/ContactF";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

function page() {
  return (
    <div className="bg-white min-h-screen cont">
      <Navbar />
      <ContactF />
      {/* <Footer />ś */}
    </div>
  );
}

export default page;
