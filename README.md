# Recuperação de senha

**Requesitos Funcionais**

- O usuario deve poder recuperar sua senha informando o seu email;
- o usuario deve receber  um email com instruções de recuperação de senha;
-o usuario deve poder resetar sua senha;

**Requesitos não Funcionais** 

- Utilizar Mailtrap para testar envios em dev;
- Utillizar Amazon SES para envios em produção;
- O envio de e-mail deve acontecer em segundo plano(background job);

**Regras de Negocio** 
- O link enviado por email para resetar a senha ,deve expirar em 2h;
- O usuário precisa confirmara a nova ao reserta sua senha;

# Atualização do perfil
**Requesitos Funcionais**

- o usuário deve poder atualizar seu nome, email e senha;

**Regras de Negocio**

- O usuario não pode alterar seu email para um email já atualizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa xonfirmar a nova senha;

# Painel de prestador

# Agendamento de serviços
**RF**
- O usuário deve pode listar todos prestadores de serviços cadastrados;
- O usuário deve listar os dias de um mês com pelo menos um horário disponivel de um prestador.
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestador deve ser armazenada em cache;

**RN**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h as 18h (Primeiro às 8h, último às 17hr)
- O usuário não pode agendar em um horario já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode  agendar serviços consigo mesmo;# api-barber
