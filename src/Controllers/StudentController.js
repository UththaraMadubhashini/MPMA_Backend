import { z } from "zod";

export const registerStudent = (req, res, next) => {
  const schema = z.object({
    NICNumber: z.string(),
    address: z.string(),
    courses: z.array(z.object),
  });
  try {
    //methana idan
  } catch (error) {
    next(error);
  }
};
