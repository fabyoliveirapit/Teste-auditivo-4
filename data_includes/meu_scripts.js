// --- Script Completo com Faixas Etárias para Idade e Região do Brasil ---

// Nenhuma linha de __Set("preload", "..."); ou PennController.Preload(); aqui.
// A imagem será carregada diretamente quando newImage().print() for chamado.

PennController.ResetPrefix(null);

Sequence("Participante", "Instrucoes", "Treinamento", "InicioExperimento", randomize("Experimento"), "Questionario", SendResults(), "Final");

Header(
    defaultText
        .css("font-size", "1.2em")
        .css("text-align", "center")
        .center()
    ,
    defaultTextInput
        .css("font-size", "1.1em")
        .center()
    ,
    defaultButton
        .css("font-size", "1.1em")
        .css("background-color", "#4CAF50")
        .css("color", "white")
        .css("padding", "10px 20px")
        .css("border", "none")
        .css("border-radius", "5px")
        .css("cursor", "pointer")
        .center()
);

newTrial("Participante",
    newText("<p style='margin-bottom: 20px;'>Bem-vindo/as! Solicitaremos aqui algumas informações gerais antes de começar.</p>").print(),
    newText("<p style='margin-bottom: 10px;'>Por favor, escreva seu <strong>PRIMEIRO NOME</strong> abaixo:</p>").print(),
    newTextInput("Nome")
        .css("font-size", "1.1em")
        .center()
        .print()
        .log()
    ,
    newButton("Iniciar")
        .center()
        .print()
        .wait()
);

newTrial("Instrucoes",
    newText("<p style='margin-bottom: 20px; text-align:center;'>INSTRUÇÕES</p>").print(),
    newText("<p style='margin-bottom: 20px; text-align:justify;'>Você irá participar de uma tarefa de escuta de sentenças e leitura de palavras. Primeiro, você ouvirá uma sentença completa. Depois, uma palavra irá aparecer na tela. As palavras que você irá ler podem ou não pertencer ao português. Sua tarefa consiste em ouvir atentamente as frases, ler as palavras que irão aparecer na tela e responder o mais rápido possível: '<strong>É uma palavra do português?</strong>', clicando em <strong>SIM</strong> ou <strong>NÃO</strong>. Ao final do teste, você responderá um pequeno questionário para verificarmos o quanto consegue lembrar das frases escutadas, por isso é importante que preste bastante atenção nas sentenças que irá ouvir.</p>").print(),
    newButton("Começar Treinamento")
        .center()
        .print()
        .log()
        .wait()
);

newTrial("Treinamento",
    // Removido: newText("<p style='margin-bottom: 20px; text-align:center;'>Treinamento</p>").print(),

    // --- Treinamento Trial 1 ---
    newImage("altofalante1", "altofalante_exp.png")
        .css({"width": "80px", "height": "80px", "margin-bottom": "20px"})
        .center()
        .print(),
    newAudio("audio1", "PEDREIRO1.mp3").play().wait(),
    getImage("altofalante1").remove(),
    newTimer("delayTimer1", 300).start().wait(),
    newText("DOFILDA").css("font-size", "2em").center().print(),
    // Removido: newText("pergunta1", "É uma palavra do português?").print(),

    newKey("resposta_t1", "VN")
        .log()
        .wait()
    ,
    getAudio("audio1").remove(),
    getText("DOFILDA").remove(),
    // Removido: getText("pergunta1").remove(),

    // --- Treinamento Trial 2 ---
    newImage("altofalante2", "altofalante_exp.png")
        .css({"width": "80px", "height": "80px", "margin-bottom": "20px"})
        .center()
        .print(),
    newAudio("audio2", "BAGAGEM1.mp3").play().wait(),
    getImage("altofalante2").remove(),
    newTimer("delayTimer2", 300).start().wait(),
    newText("TECLADO").css("font-size", "2em").center().print(),
    // Removido: newText("pergunta2", "É uma palavra do português?").print(),

    newKey("resposta_t2", "VN")
        .log()
        .wait()
    ,
    getAudio("audio2").remove(),
    getText("TECLADO").remove(),
    // Removido: getText("pergunta2").remove(),

    // --- Treinamento Trial 3 ---
    newImage("altofalante3", "altofalante_exp.png")
        .css({"width": "80px", "height": "80px", "margin-bottom": "20px"})
        .center()
        .print(),
    newAudio("audio3", "PIPOCA1.mp3").play().wait(),
    getImage("altofalante3").remove(),
    newTimer("delayTimer3", 300).start().wait(),
    newText("NADOTA").css("font-size", "2em").center().print(),
    // Removido: newText("pergunta3", "É uma palavra do português?").print(),

    newKey("resposta_t3", "VN")
        .log()
        .wait()
        ,
    getAudio("audio3").remove(),
    getText("NADOTA").remove(),
    
    // --- Treinamento Trial 4 ---
    newImage("altofalante4", "altofalante_exp.png")
        .css({"width": "80px", "height": "80px", "margin-bottom": "20px"})
        .center()
        .print(),
    newAudio("audio4", "ATENDIMENTO1.mp3").play().wait(),
    getImage("altofalante4").remove(),
    newTimer("delayTimer4", 300).start().wait(),
    newText("CIRURGIA").css("font-size", "2em").center().print(),
    // Removido: newText("pergunta2", "É uma palavra do português?").print(),

    newKey("resposta_t4", "VN")
        .log()
        .wait()
    ,
    getAudio("audio4").remove(),
    getText("CIRURGIA").remove(),
    
);

newTrial("InicioExperimento",
    newText("<p style='font-size: 1.5em; margin-bottom: 30px; text-align:center;'>Tudo certo? Você tem alguma dúvida? Quando estiver preparado/a iniciaremos a tarefa.</p>").print(),
    newButton("Iniciar Experimento")
        .center()
        .print()
        .wait()
);

Template("tabela_script_auditivo.csv", row =>
     newTrial("Experimento",
        newImage("altofalante_exp_trial", "altofalante_exp.png")
            .css({"width": "80px", "height": "80px", "margin-bottom": "20px"})
            .center()
            .print(),
        newAudio("audio", row.Audio)
            .play()
            .wait()
        ,
        getImage("altofalante_exp_trial").remove(),
        newTimer("delayTimerExp", 300).start().wait()
        ,
        newText(row.PalavraAlvo)
            .css("font-size", "2em")
            .center()
            .print()
            .log()
        ,
        newKey("resposta_exp", "VN")
            .log()
            .wait()
    )
    .log("Audio", row.Audio)
    .log("PalavraAlvo", row.PalavraAlvo)
    .log("Item", row.Item)
    .log("Group", row.Group)
);

newTrial("Questionario",
    newText("<p style='margin-bottom: 20px; text-align:center;'>Questionário Final</p>").print(),
    newText("<p style='margin-bottom: 10px;'>Por favor, marque todas as palavras que você se lembra de ter ouvido durante a atividade:</p>").print(),

    // Usando newHtml para criar as checkboxes com as novas palavras
    newHtml("lembranca_palavras", `
        <label><input type="checkbox" name="Viagem" value="Viagem"> Viagem</label><br>
        <label><input type="checkbox" name="Ajuda" value="Ajuda"> Ajuda</label><br>
        <label><input type="checkbox" name="Vergonha" value="Vergonha"> Vergonha</label><br>
        <label><input type="checkbox" name="Natal" value="Natal"> Natal</label><br>
        <label><input type="checkbox" name="Praça" value="Praça"> Praça</label><br>
        <label><input type="checkbox" name="Museu" value="Museu"> Museu</label><br>
        <label><input type="checkbox" name="Encontro" value="Encontro"> Encontro</label><br>
        <label><input type="checkbox" name="Vaso" value="Vaso"> Vaso</label><br>
        <label><input type="checkbox" name="Igreja" value="Igreja"> Igreja</label><br>
        <label><input type="checkbox" name="Barco" value="Barco"> Barco</label><br>
        <label><input type="checkbox" name="Sogra" value="Sogra"> Sogra</label><br>
        <label><input type="checkbox" name="Jardineiro" value="Jardineiro"> Jardineiro</label><br>
        <label><input type="checkbox" name="Asilo" value="Asilo"> Asilo</label><br>
        <label><input type="checkbox" name="Feira" value="Feira"> Feira</label><br>
        <label><input type="checkbox" name="Raiva" value="Raiva"> Raiva</label><br>
        <label><input type="checkbox" name="Clínica" value="Clínica"> Clínica</label><br>
        <label><input type="checkbox" name="Gerente" value="Gerente"> Gerente</label><br>
        <label><input type="checkbox" name="Desfile" value="Desfile"> Desfile</label><br>
        <label><input type="checkbox" name="Festa" value="Festa"> Festa</label><br>
        <label><input type="checkbox" name="Sítio" value="Sítio"> Sítio</label><br>
    `)
    .css({"text-align": "left", "margin-left": "auto", "margin-right": "auto", "width": "fit-content"}) // Centraliza o bloco de checkboxes
    .print()
    .log() // Este log registra a string HTML do elemento
    ,
    newButton("Enviar respostas")
        .center()
        .print()
        .wait()
);

newTrial("Final",
    newText("<p style='margin-bottom: 20px; text-align:center;'>Agradecemos sua participação!</p>").print(),
    newText("<p style='margin-bottom: 20px; text-align:center;'>Suas respostas foram salvas com sucesso.</p>").print(),
    newButton("Encerrar")
        .center()
        .print()
        .wait()
);
