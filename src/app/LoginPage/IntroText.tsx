
export default function IntroductionText() {
    return(
        <div className = "text column-container">
        <div className = "card">
            <h1>
                This is a little work in progress user registration and authentication log in page. Stay tuned!
            </h1>
            <h2> The goal of this little project is to learn how SQL injection works and how to combat it. At the moment, I have created a function registration page which saves a username and hashed password to a database. The next step is to make a log in page, one which is vulernable to SQL injection and one which is secure.</h2>
            
        </div>
        </div>
    )
}