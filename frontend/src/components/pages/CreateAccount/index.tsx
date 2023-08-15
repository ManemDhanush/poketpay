import SignUp from "../../organisms/SignUp"
import { SignUpTemplate } from "../../templates/SignUpTemplate.tsx"

const CreateAccount = () => {
  return (
    <div>
        <SignUpTemplate children={<SignUp />}></SignUpTemplate>
    </div>
  )
}

export default CreateAccount