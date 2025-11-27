const { request } = require('express');
const mongoose = require('mongoose');
const { type } = require('os');
const { title } = require('process');

// INTRO SCHEMA
const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

// ABOUT SCHEMA
const aboutSchema = new mongoose.Schema({
    profileImage: { type: String, required: true },
role: { type: String, required: true },
description: { type: String, required: true },
birthday: { type: String, required: true },
age: { type: String, required: true },
phone: { type: String, required: true },
email: { type: String, required: true },
degree: { type: String, required: true },
location: { type: String, required: true },

});

// ✅ EDUCATION SCHEMA (Added)
const educationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

// PROJECTS SCHEMA
const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    technologies: {
        type: Array,
        required: true,
    }
});

// COURSES SCHEMA
const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
});

// CONTACT SCHEMA
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});

// EXPORT MODELS
module.exports = {
    Intro: mongoose.model("intros", introSchema),
    About: mongoose.model("abouts", aboutSchema),
    Education: mongoose.model("educations", educationSchema),
    Project: mongoose.model("projects", projectsSchema),
    Course: mongoose.model("courses", coursesSchema),
    Contact: mongoose.model("contacts", contactSchema)
};
