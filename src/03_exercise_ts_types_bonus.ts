type Character = {
    id: string;
    name: string;
    status: string;
    species: string;
    originName: string;
};

async function fetchCharacters(): Promise<Character[]> {
    const url = 'https://rickandmortyapi.com/api/character';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results.map((char: any) => ({
            id: char.id.toString(),
            name: char.name,
            status: char.status,
            species: char.species,
            originName: char.origin.name,
        }));
    } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
    }
}

function getLivingHumans(characters: Character[]): Character[] {
    return characters.filter((char) => char.status === 'Alive' && char.species === 'Human');
}

function getAllNames(characters: Character[]): string[] {
    return characters.map((char) => char.name);
}

let characters = await fetchCharacters();
console.log("Living Humans: ", getLivingHumans(characters));
console.log("All Names: ", getAllNames(characters));

