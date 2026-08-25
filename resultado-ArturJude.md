Data de atualização: Dia 25/8/2026 às 16:55 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| Atv01UmItem | exibe a atividade com status "feito" quando completed for true | ✅ | ✅ | Sem erros |
| Atv01UmItem | exibe a atividade com status "a fazer" quando completed for false | ✅ | ✅ | Sem erros |
| Atv02MuitosItens | exibe todas as atividades com seus respectivos status | ✅ | ✅ | Sem erros |
| Atv03TratarErrosDeUm | exibe o comentário recebido | ✅ | ✅ | Sem erros |
| Atv03TratarErrosDeUm | mantém o texto inicial quando a requisição falha | ✅ | ❌ | TestingLibraryElementError: Unable to find an element with the text: Os dados do comentário aparecerão no lugar deste texto. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible. |
| Atv04TratarErrosDeMuitos | exibe todos os comentários recebidos | ✅ | ❌ | Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports. |
| Atv04TratarErrosDeMuitos | mantém o texto inicial quando a requisição falha | ✅ | ❌ | Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports. |
