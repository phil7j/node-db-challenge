const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();

// get all projects
router.get('/projects', async (req, res) => {
    try {
      const projects = await Projects.getProjects();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get projects' });
    }
  });

// Post a project
router.post('/projects', async (req, res) => {
    const projectData = req.body;
    try {
      const project = await Projects.addProject(projectData);
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new project' });
    }
  });

// Get Resources
router.get('/resources', async (req, res) => {
    try {
      const resources = await Projects.getResources();
      res.json(resources);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get resources' });
    }
  });

// Post Resources
router.post('/resources', async (req, res) => {
    const resourceData = req.body;
    try {
      const resource = await Projects.addResource(resourceData);
      res.status(201).json(resource);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new resource' });
    }
  });

// Get Tasks
router.get('/tasks', async (req, res) => {

    try {
      const tasks = await Projects.getTasks();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get tasks' });
    }
  });

// Post Task
router.post('/tasks', async (req, res) => {
    const taskData = req.body;
    try {
      const task = await Projects.addTask(taskData);
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new task' });
    }
  });
module.exports = router;