import { SignInForm } from "../../components/auth/SignInForm"
import { PageMeta } from "../../components/common/PageMeta"
import { AuthLayout } from "../../components/layout/AuthLayout"

export const SignIn = () => {
  return (
    <>
      <PageMeta
      title="TelcoHub | Iniciar Sesión"
      description="Accede a tu cuenta de TelcoHub para gestionar contratistas, registrar materiales y visualizar estadísticas. Tu información está segura con nosotros."
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  )
}