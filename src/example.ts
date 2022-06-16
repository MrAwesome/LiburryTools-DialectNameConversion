function someFunctionYouCanUse(someArg: string): string {
    return someArg + "lawl";
}

async function main() {
    const en = new Intl.DisplayNames(['en'], {type: "language"});
    const afr = en.of('afr');
    console.log(afr);
}

// Ignore this my brother
(async () => {main()})();
export {}
