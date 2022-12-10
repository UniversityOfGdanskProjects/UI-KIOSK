import { Button, Header } from '@UG/libs/components';
import { useCallback } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { LoginFormFields } from './LoginFormFields';
import { LoginFormTypes, LoginFormFieldsNames } from './types';
import { validationSchema } from './validationSchema';
import { styled } from '@mui/material/styles';

const StyledForm = styled('form')`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
`;

export const LoginPageForm = () => {
  const formMethods = useForm<LoginFormTypes>({
    defaultValues: { [LoginFormFieldsNames.USERNAME]: '', [LoginFormFieldsNames.PASSWORD]: '' },
    resolver: validationSchema,
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<LoginFormTypes> = useCallback(
    data => {
      formMethods.reset();
      alert(JSON.stringify(data));
    },
    [formMethods],
  );

  return (
    <FormProvider {...formMethods}>
      <Header />
      <StyledForm data-cy="admin-login-form" onSubmit={formMethods.handleSubmit(onSubmit)}>
        <LoginFormFields />
        <Button name="login" text="log in" type="submit" />
      </StyledForm>
    </FormProvider>
  );
};
