import { date, Schema, z } from "zod";

export const registerStudent = (req, res, next) => {
  console.log(req.body);
  const schema = z.object({
    NICNumber: z.string(),
    address: z.string().min(5), // Ensuring a minimum length
    cdcNumber: z.string().optional(), // Allowing empty values
    class: z.string().optional(),
    company: z.string().min(1),
    contactMobile: z.string().regex(/^\d{10}$/, "Invalid mobile number"), // Enforcing 10-digit format
    contactResidence: z.string().optional(),
    country: z.string().min(1),
    courses: z.array(z.string()).min(1), // At least one course required
    department: z.string().optional(),
    designation: z.string().optional(),
    division: z.string().optional(),
    dlNo: z.string().optional(),
    dob: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    email: z.string().email(),
    emergencyAddress: z.string().optional(),
    emergencyContact: z.string().optional(),
    emergencyName: z.string().optional(),
    fullName: z.string().min(1),
    isSLPAEmployee: z.string().optional(),
    nationality: z.string().optional(),
    seaService: z.string().optional(),
    sectionUnit: z.string().optional(),
    selectedCourses: z.string().optional(),
    serviceNo: z.string().optional(),
    stream: z.string().min(1),
    swimmingAbility: z.coerce.boolean(),
  });

  try {
    const data = schema.parse(req.body);
    console.log(data);
    const uploads = req.files; //array of photo files
    const nic = uploads.nic.name; //save nic file name in database
    const passport = uploads.passport.name;
    const photo = uploads.photo.name;
    //use query to save the data in the database
    res.status(200).json("success");
  } catch (error) {
    next(error);
  }
};
