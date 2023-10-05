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