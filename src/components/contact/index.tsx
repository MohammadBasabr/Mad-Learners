import { useFormik } from "formik";
import { useRouter } from "next/router";
import ContactSchema from "./ContactValidation";

interface IContactProps extends React.PropsWithChildren {}

const Contact: React.FunctionComponent<IContactProps> = (
  props
): JSX.Element => {
  const router = useRouter();

  const ContactForm = (): void => {
    alert("Your message is sent successfully.");
    router.push("/");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
    },
    validationSchema: ContactSchema,
    onSubmit: ContactForm,
  });

  return (
    <section className="flex min-h-[calc(100vh-96px)] w-full flex-col items-center justify-start bg-light-primary py-10 dark:bg-dark-primary lg:h-[calc(100vh-176px)] lg:min-h-[calc(100vh-176px)] lg:flex-row">
      <div className="flex h-full w-full flex-col items-center justify-center p-12 text-light-heading dark:text-dark-heading sm:col-span-1 lg:w-1/2 ">
        <h1 className="text-4xl font-bold uppercase">Contact Us</h1>
        <p className="text-1xl w-full text-justify text-light-content dark:text-dark-content">
          If you need any help please contact us, we are looking forward to hear
          it. Please send your suggestions and criticisms through the form
          provided on this page and help us to improve our services.
        </p>
      </div>

      <form
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        className="mb-4 flex h-full w-full flex-col justify-center rounded-2xl px-8 pt-6 pb-8 text-light-heading dark:text-dark-heading lg:w-1/2"
      >
        <div className="mb-4">
          <div className="flex justify-between">
            <label className="mb-2 block text-sm font-bold" htmlFor="firstName">
              First Name
            </label>
            <p className="text-xs text-light-error dark:text-dark-error">
              {formik.touched.firstName && formik.errors.firstName}
            </p>
          </div>
          <input
            className={`w-full rounded border-none bg-light-secondary py-1 px-3 leading-tight text-light-content focus:outline-none dark:bg-dark-secondary dark:text-dark-content ${
              formik.touched.firstName &&
              formik.errors.firstName &&
              "ring-2 ring-light-error dark:ring-dark-error"
            }`}
            id="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
          />
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <label className="mb-2 block text-sm font-bold" htmlFor="firstName">
              Last Name
            </label>
            <p className="text-xs text-light-error dark:text-dark-error">
              {formik.touched.lastName && formik.errors.lastName}
            </p>
          </div>
          <input
            className={`w-full rounded border-none bg-light-secondary py-1 px-3 leading-tight text-light-content focus:outline-none dark:bg-dark-secondary dark:text-dark-content ${
              formik.touched.lastName &&
              formik.errors.lastName &&
              "ring-2 ring-light-error dark:ring-dark-error"
            }`}
            id="lastName"
            type="text"
            {...formik.getFieldProps("lastName")}
          />
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <label className="mb-2 block text-sm font-bold" htmlFor="email">
              Email
            </label>
            <p className="text-xs text-light-error dark:text-dark-error">
              {formik.touched.email && formik.errors.email}
            </p>
          </div>
          <input
            className={`w-full rounded border-none bg-light-secondary py-1 px-3 leading-tight text-light-content focus:outline-none dark:bg-dark-secondary dark:text-dark-content ${
              formik.touched.email &&
              formik.errors.email &&
              "ring-2 ring-light-error dark:ring-dark-error"
            }`}
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between">
            <label
              className="mb-2 block text-sm font-bold"
              htmlFor="description"
            >
              Description
            </label>
            <p className="text-xs text-light-error dark:text-dark-error">
              {formik.touched.description && formik.errors.description}
            </p>
          </div>
          <textarea
            className={`w-full rounded border-none bg-light-secondary py-1 px-3 leading-tight text-light-content focus:outline-none dark:bg-dark-secondary dark:text-dark-content ${
              formik.touched.description &&
              formik.errors.description &&
              "ring-2 ring-light-error dark:ring-dark-error"
            }`}
            id="description"
            cols={50}
            rows={5}
            {...formik.getFieldProps("description")}
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-light-hover py-2 uppercase text-light-primary transition-all hover:bg-light-secondary hover:text-light-heading dark:bg-dark-hover dark:text-dark-primary dark:hover:bg-dark-secondary dark:hover:text-dark-heading"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
