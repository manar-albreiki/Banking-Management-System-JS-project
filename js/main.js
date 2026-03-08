let account = null
startSystem()



function startSystem() {

    let fullName = prompt("Enter your full Name")
    let NationalID = +prompt("Enter your National ID")
    let Age = +prompt("Enter your Age")
    if (Age < 18) {
        alert("You are not allowed to create an account")
        return
    }
    let AccType = prompt("Enter your Account type  (savings / current / business)")
    let balance = +prompt("Enter your Initial deposit amount")
    if (isNaN(balance) || balance <= 0) {
        alert("Invalid amount! Please enter the correct amount.")
        window.location.reload()
        return
    }


    let confirmation = prompt("Do you want to continue creating the account? (yes / no)")

    if (confirmation === "yes") {

        let fullName2 = prompt("Enter your full Name Again")
        let NationalID2 = +prompt("Enter your National ID Again")
        let Age2 = +prompt("Enter your Age Again")
        let AccType2 = prompt("Enter your Account type  (savings / current / business) Again")
        let balance2 = +prompt("Enter your Initial deposit amount Again")

        if (
            fullName === fullName2 &&
            NationalID === NationalID2 &&
            Age === Age2 &&
            AccType === AccType2 &&
            balance === balance2) {

            let accountNumber = Math.floor(100000 + Math.random() * 900000)

            account = {
                accountNumber: accountNumber,
                fullName: fullName,
                nationalID: NationalID,
                age: Age,
                accountType: AccType,
                balance: balance,
                transactionHistory: [],
                accountStatus: "active"
            }

            alert("Account created successfully!")
            setTimeout(() => {
                console.log(account)
                menuSystem()
            }, 3000)

        }
        else {
            alert("Information does not match. Account not created.")
            return
        }

    }
    else {
        alert("Account creation cancelled")
  
    }

}




function menuSystem() {
    while (true) {
        let menu = +prompt(`choose:
            1.Deposit money,
             2.Withdraw money
              3.Check balance
               4.View transaction history
                5.Calculate yearly interest 
                6.Close account
                 7.Exit`)
        if (menu == 1) {

            alert("Deposit money choice selected")
            Deposit()
            continue
        }
        else if (menu == 2) {

            alert("Withdraw money choice selected")
            withdraw()
            continue
        }
        else if (menu == 3) {

            alert("Check balance choice selected")
            checkBalance()
            continue
        }
        else if (menu == 4) {

            alert("View transaction history choice selected")
            history()
            continue
        }
        else if (menu == 5) {

            alert("Calculate yearly interest choice selected")
            Interest()
            continue
        }

        else if (menu == 6) {

            alert("Close account choice selected")
            closeAccount()
            break
        }
        else if (menu == 7) {
            alert("Exiting system")
                 summary()
            break
        }
        else {
            alert("Invalid choice")
            continue
        }


    }



}


function Deposit() {
    let depositAmount = +prompt("Enter the Deposit Amount ")
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Invalid amount! Please enter the correct amount.")

        return
    }

    account.balance += depositAmount
    account.transactionHistory.push({
        type: "Deposit",
        amount: depositAmount,
        date: new Date()
    })
    alert("Deposit successful! Your new balance is: " + account.balance)
    console.log("Transaction added:", account.transactionHistory[account.transactionHistory.length - 1])
    console.log("Current balance:", account.balance)
}

function withdraw() {
    let withdrawAmount = +prompt("Enter the withdraw Amount ")


    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Invalid amount! Please enter the correct number.")
        return
    }


    if (withdrawAmount > account.balance) {
        alert("You cannot withdraw more than your current balance.")
        return
    }
    account.balance -= withdrawAmount
    account.transactionHistory.push({
        type: "withdraw",
        amount: withdrawAmount,
        date: new Date()
    })
    alert("withdraw successful! Your new balance is: " + account.balance)
    console.log("Transaction added:", account.transactionHistory[account.transactionHistory.length - 1])
    console.log("Current balance:", account.balance)
}

function checkBalance() {
    alert(`Your balance is: ${account.balance}`)
}


function history() {
    for (let i = 0; i < account.transactionHistory.length; i++) {
        let x = account.transactionHistory[i]

        console.log(`Transaction History :
            Type:  ${x.type} 
            Amount: ${x.amount} 
            Date: ${x.date}`);

    }

}

function Interest() {
    let interestAmount = 0
    if (account.accountType == "savings") {
        interestAmount = 0.1
    }
    else if (account.accountType == "current") {
        interestAmount = 0.05
    }
    else if (account.accountType == "business") {
        interestAmount = 0.15
    }
    let yearlyInterest = account.balance * interestAmount

    alert(`The yearly interest for your account is: ${yearlyInterest}`)

}

function closeAccount() {

    let confirmClose = confirm("Are you sure you want to close your account?")

    if (confirmClose) {

        account.accountStatus = "closed"

        alert("Your account has been closed. No more deposits or withdrawals are allowed.")
   
    } else {
        alert("Account closing canceled.")
    }
}

let summary = function () {
    console.log(" Account Summary :")
    console.log("Full Name:", account.fullName)
    console.log("National ID:", account.nationalID)
    console.log("Age:", account.age)
    console.log("Account Number:", account.accountNumber)
    console.log("Account Type:", account.accountType)
    console.log("Balance:", account.balance)
    console.log("Status:", account.accountStatus)
    console.log("Transactions:", account.transactionHistory)
}