import { test } from 'node:test';
import assert from 'node:assert';
import 'dotenv/config';

test('Un usuario puede iniciar sesión con credenciales válidas', async () => {
    const stagehand = new Stagehand({
        env: 'LOCAL',
        model: 'google/gemini-2.5-flash' // si usas openai, cambia esto a 'openai/gpt-4o-mini' o 'openai/gpt-5-mini'
    });


    const agent = await stagehand.Agent({
        mode: 'cua',
        model: {
            modelName: 'google/gemini-2.5-flash',
            apiKey: process.env.GEMINI_API_KEY
        },
        systemPrompt: 'Eres un agente de testin e2e para navegar paginas y hacer las acciones que te pedimos',
    });

    await stagehand.init();

    const [page] = stagehand.context.pages();

    await page.goto('https://example.com/login');

    const result = await agent.execute("add two tickets 'Entrada' to the cart for the JSConf event and extract the subtotal amount displayed in the cart.")

    console.log(result)

    // Lo quiero que haga
    // await stagehand.act('Click to "Comprar Entradas"')

    // await stagehand.act('Add one "Entrada General" ticket to the cart')
    // await stagehand.act('Add another one "Entrada General" ticket to the cart')

    // // Extraer la información
    // const { extraction } = await stagehand.extract("Extract the subtotal from the page.")
    // console.log('Subtotal extraído:', extraction)

    // assert.strictEqual(extraction, '€287.98')

    await stagehand.close()
})