import { z } from "zod";
import { i18n } from "../../../translations/i18n";

export const CreateUserSchema = z
  .object({
    username: z.string({
      required_error: i18n.t(
        "pages.access.subpages.login.validation.usernameRequired",
        "The username is required"
      ),
    }),
    email: z.string({
      required_error: i18n.t(
        "pages.access.subpages.login.validation.usernameRequired",
        "The email is required"
      ),
    }),
    password: z
      .string({
        required_error: i18n.t(
          "pages.access.subpages.login.validation.passwordRequired",
          "The password is required"
        ),
      })
      .min(
        3,
        i18n.t(
          "pages.access.subpages.login.validation.passwordShort",
          "The password is to short"
        )
      ),
    confirmPassword: z
      .string({
        required_error: i18n.t(
          "pages.access.subpages.login.validation.passwordRequired",
          "The password is required"
        ),
      })
      .min(3, "passwordTooShort"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

export type CreateUserSchemaType = z.infer<typeof CreateUserSchema>;