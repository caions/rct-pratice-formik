import {
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikHelpers,
  FormikValues,
} from 'formik';
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

  const validate = (values: IFields): IFields | undefined => {
    const errors = {} as IFields;
    if (!values.nome) {
      errors.nome = 'Nome é obrigatório';
    }

    if (!values.email.length) {
      errors.email = 'email inválido';
    }
    return errors;
  };

  const handleSubmit = (values: IFields, actions: FormikHelpers<IFields>) => {
    alert(JSON.stringify(values));
  };

  interface IErrors {
    errors: {
      nome: string;
      email: string;
    };
  }

  const Formulario = ({ errors }: IErrors) => (
    <div className={styles.form}>
      <Form>
        <Field name="nome" />
        {errors.nome ? <span>{errors.nome}</span> : ''}
        <Field name="email" />
        {errors.email ? <span>{errors.email}</span> : ''}
        <br />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
        /*         validateOnBlur={false}
        validateOnChange={false} */
        // eslint-disable-next-line react/no-children-prop
        children={Formulario}
      />
    </div>
  );
};
