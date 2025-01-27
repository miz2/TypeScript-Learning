import express from "express";
import { z } from "zod";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

// Infer the type from the schema (optional but useful for type reuse)
type UserProfile = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  // Validate the request body against the schema
  const result = userProfileSchema.safeParse(req.body);

  // Handle validation errors
  if (!result.success) {
    res.status(400).json({ error: result.error });
    return;
  }

  // Type-safe access to the validated data
  const updateBody: UserProfile = result.data;

  // Simulating a database update
  console.log("Updating user profile:", updateBody);

  res.json({
    message: "User updated successfully",
    updateBody,
  });
});

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));
