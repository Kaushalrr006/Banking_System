const Bank = require('./models');

module.exports.getbank = async (req, res) => {
  try {
    const bank = await Bank.find();
    res.json(bank);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching Bank details.' });
  }
};

module.exports.createBank = async (req, res) => {
  const { id, name, email, balance } = req.body;

  try {
    const newCard = new Bank({
      id,
      name,
      email,
      balance,
    });

    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (error) {
    console.error('Error creating card:', error);
    res.status(500).json({ error: 'An error occurred while creating the card.' });
  }
};

module.exports.updateBank = async (req, res) => {
    const { id } = req.params;
    const { name, email, balance } = req.body; // 'status' is the new stage

    try {
        const updatebank = await Bank.findByIdAndUpdate(id, { name, email, balance }, { new: true });

        if (!updatebank) {
            return res.status(404).send("Not found");
        }

        console.log('Successfully updated bank details');
        console.log('Result:', updatebank);
        res.send(updatebank);
    } catch (error) {
        console.error("Error updating bank details:", error);
        res.status(500).send("Internal server error");
    }
};

module.exports.Transfer=async (req, res) => {
  const { id1,id2 } = req.params; // Correctly extract the 'id' parameter from 'req.params'
  const { amount } = req.body;
  try {
   
    console.log('Sender ID:', id1);
    console.log('Recipient ID:', id2);

    // Fetch sender and recipient bank details
    const senderBank = await Bank.findById(id1);
    const recipientBank = await Bank.findById(id2);

    if (!senderBank || !recipientBank) {
      return res.status(404).json({ error: 'Sender or recipient not found' });
    }

    if (senderBank.balance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    // Update sender and recipient balances
    // Convert the amount to a number (float)
    const transferAmount = parseFloat(amount);

    senderBank.balance -= transferAmount;
    recipientBank.balance += transferAmount;

    await senderBank.save();
    await recipientBank.save();
    console.log(transferAmount);


    res.json({ message: 'Transfer successful' });
  } catch (error) {
    console.error('Error transferring funds:', error);
    res.status(500).json({ error: 'An error occurred while transferring funds' });
  }
};



