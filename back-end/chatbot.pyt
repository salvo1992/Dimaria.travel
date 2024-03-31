from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

# Creazione del chatbot
chatbot = ChatBot('MyChatBot')

# Creazione di un trainer per addestrare il bot usando il dataset predefinito
trainer = ChatterBotCorpusTrainer(chatbot)

# Addestramento del bot usando il dataset di addestramento predefinito
trainer.train('chatterbot.corpus.italian')

# Interazione con il chatbot
while True:
    user_input = input('Tu: ')
    response = chatbot.get_response(user_input)
    print('Bot:', response)