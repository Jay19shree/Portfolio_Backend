const router = require("express").Router();

const {
  Intro,
  About,
  Contact,
  Course,
  Project,
  Education,  
} = require("../models/portfolioModel");

const User = require("../models/userModel");


// ----------------------------------------------------
// GET ALL PORTFOLIO DATA
// ----------------------------------------------------
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const courses = await Course.find();
    const educations = await Education.find();  

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects,
      contact: contacts[0],
      courses,
      educations,     
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ----------------------------------------------------
// UPDATE INTRO
// ----------------------------------------------------
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ----------------------------------------------------
// UPDATE ABOUT
// ----------------------------------------------------
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});



// ----------------------------------------------------
// ADD EDUCATION 
// ----------------------------------------------------
router.post("/add-education", async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();

    res.status(200).send({
      data: education,
      success: true,
      message: "Education added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ----------------------------------------------------
// UPDATE EDUCATION 
// ----------------------------------------------------
router.post("/update-education", async (req, res) => {
  try {
    const education = await Education.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: education,
      success: true,
      message: "Education updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ----------------------------------------------------
// DELETE EDUCATION  
// ----------------------------------------------------
router.post("/delete-education", async (req, res) => {
  try {
    const education = await Education.findOneAndDelete({
      _id: req.body._id,
    });

    res.status(200).send({
      data: education,
      success: true,
      message: "Education deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ----------------------------------------------------
// ADD PROJECT
// ----------------------------------------------------
router.post("/add-project", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    res.status(200).send({
      data: project,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ----------------------------------------------------
// UPDATE PROJECT
// ----------------------------------------------------
router.post("/update-project", async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ----------------------------------------------------
// DELETE PROJECT
// ----------------------------------------------------
router.post("/delete-project", async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.body._id,
    });

    res.status(200).send({
      data: project,
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ----------------------------------------------------
// ADD COURSE
// ----------------------------------------------------
router.post("/add-course", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();

    res.status(200).send({
      data: course,
      success: true,
      message: "Course added successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ----------------------------------------------------
// UPDATE COURSE
// ----------------------------------------------------
router.post("/update-course", async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: course,
      success: true,
      message: "Course updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ----------------------------------------------------
// DELETE COURSE
// ----------------------------------------------------
router.post("/delete-course", async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({
      _id: req.body._id,
    });

    res.status(200).send({
      data: course,
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ----------------------------------------------------
// UPDATE CONTACT
// ----------------------------------------------------
router.post("/update-contact", async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact updated successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});


// ADMIN LOGIN
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) {
      user.password = "";
      res.status(200).send({
        data: user,
        success: true,
        message: "Login Successfully",
      });
    } else {
      res.status(200).send({
        data: null,
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


// EXPORT ROUTER
module.exports = router;
