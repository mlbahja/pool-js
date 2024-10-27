function RNA(DNA){
    let rna = '';
    for (let i = 0;i < DNA.length;i++){
        switch (DNA[i]){
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'A':
                rna += 'U';
                break;
            default:
                rna = undefined;
        }
    }
    return rna;
}
function DNA(RNA){
   let dna = '';
   for (let i = 0;i < RNA.length;i++){
    switch (RNA[i]){
        case 'A':
            dna += 'T';
            break;
        case 'U':
            dna += 'A';
            break;
        case 'C':
            dna += 'G';
            break;
        case 'G':
            dna += 'C';
        break;
        default:
            dna = undefined;
    }
   }
   return dna;
}
console.log(RNA('TAGC'));