import { Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import styles from './style.module.css';

interface IFields {
  nome: string;
  email: string;
}

export const Home: React.FC = () => {
  // eslint-disable-next-line prefer-const

  const initialValues = {
    nome: '',
    email: '',
  };

  const handleSubmit = (
    values: IFields,
    formikHelpers: FormikHelpers<IFields>,
  ) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Field name="nome" />
            <Field name="email" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
