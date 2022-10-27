import { Configuration, OpenAIApi } from "openai";

const openaiClient = new OpenAIApi(new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
}));

export interface Result {
    query: string;
    status: number;
    answers?: string[];
    error?: string;
};

function prepCompletionRequest(query: string) {
    const prompt = [
        "suggest 3 movies for \"I am feeling sad, i need something to cheer me up\" -> The Shawshank Redemption, The Dark Knight, The Godfather, Pulp Fiction\n",
        `suggest 10 movies (titles separated by comma) for "${query}" ->`,
    ].join("\n")

    return {
        model: "text-davinci-002",
        prompt: prompt,
        temperature: 0.8,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    };
}

export async function generateResult(query: string): Promise<Result> {
    const req = prepCompletionRequest(query);

    const ans: Result = { status: 200, query: query };

    try {
        const resp = await openaiClient.createCompletion(req);
        const choices = resp.data.choices;
        if (!choices || choices.length === 0) {
            return {
                ...ans,
                status: 404,
                error: "I could not generate anything for that. Please rephrase it and try again.",
            };
        }

        let titles: string[] = [];
        choices.forEach(c => {
            if (c.text) {
                const choiceList = c.text.trim()

                choiceList.split(",").forEach(line => {
                    line = line.trim()
                        .replace(/(^"|"$)/g, "")
                        .replace(/-/g, ' ');
                    if (line !== "") {
                        titles.push(line);
                    }
                })
            }
            return;
        })

        const isAbuse = titles.find(q => q.toLowerCase() === "abuse")
        if (isAbuse) {
            return {
                ...ans,
                status: 404,
                error: "Please check your query and make sure you are describing a request to fetch data.",
            };
        }

        return {
            ...ans,
            status: 200,
            answers: titles,
        };
    } catch (error: any) {
        console.warn("OpenAI error: ", error)

        let msg = "I am facing some internal issues";
        if (error.message && error.message !== "") {
            msg = error.message;
        }
        return {
            ...ans,
            status: 500,
            error: msg,
        };
    }
}
