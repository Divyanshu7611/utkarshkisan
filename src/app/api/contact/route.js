import mongoose from "mongoose";
import contactForm from "@/models/contact";

export async function POST(req, res) {
  const { name, email, phone } = await req.json();
  try {
    if (!name || !email || !phone) {
      return res.status(403).json({
        success: false,
        message: "All fields required",
      });

      const newUser = await contactForm.create({
        name,
        email,
        phone,
      });

      return res.status.json({
        succes: true,
        message: "Entry Created Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error ",
    });
  }
}
