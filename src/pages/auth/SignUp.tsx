import { SignUpForm } from "../../components/auth/SignUpForm"
import { PageMeta } from "../../components/common/PageMeta"
import { AuthLayout } from "../../components/layout/AuthLayout"

export const SignUp = () => {
  return (
    <>
      <PageMeta
      title="TelcoHub | Registro"
      description="Crea tu cuenta en TelcoHub y empieza a registrar actividades, materiales y gestionar tu información como contratista o administrador. Plataforma segura y eficiente para el manejo de tus operaciones."
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  )
}