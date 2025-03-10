const express=require("express");
const {getTask,createTask,updateTask,deleteTask}=require("../controller/taskController");

const router=express.Router();
/**
 * @swagger
 * /task:
 *   get:
 *     summary: Retrieve all tasks
 *     description: Fetches a list of all tasks from the database.
 *     responses:
 *       200:
 *         description: Successfully retrieved list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "123"
 *                   title:
 *                     type: string
 *                     example: "Washing"
 *                     decsription:
 *                         type:string
 *                     status:
 *                         type:String
 *                     dueDate:
 *                         type:Date
 */
router.get("/",getTask);
/**
 * @swagger
 * /task:
 *   post:
 *     summary: Create a new task
 *     description: Adds a new task to the list.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Shopping"
 *               Ddescription:
 *                 type: string
 *                 example: "Go for shopping"
 *               status:
 *                 type: String
 *                 example: Pending
 *               dueDate:
 *                  type:Date
 *     responses:
 *       201:
 *         description: Task created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123"
 *                 title:
 *                   type: string
 *                   example: "Shop"
 *                 description:
 *                   type: string
 *                   example: "Go for shopping"
 *                 status:
 *                   type: String
 *                 dueDate:
 *                    type:Date
 */

router.post("/",createTask);
/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Update a task
 *     description: Updates details of an existing .
 *     parameters:
 *       - in: path
 *         title: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               
 *               description:
 *                 type: string
 *                
 *               status:
 *                 type: String
 *               dueDate:
 *                  type:Date
 *     responses:
 *       200:
 *         description: Task updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123"
 *                 title:
 *                   type: string
 *                   example: "Shop"
 *                 description:
 *                   type: string
 *
 *                 status:
 *                   type: String
 *                  dueDate:
 *                    type:Date
 *       404:
 *         description: Task not found
 */
router.put("/:id",updateTask);

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Delete a task
 *     description: Removes a task from the list.
 *     parameters:
 *       - in: path
 *         title: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The task ID
 *     responses:
 *       200:
 *         description: Task deleted successfully.
 *       404:
 *         description: Task not found
 */
router.delete("/:id",deleteTask);

module.exports=router;