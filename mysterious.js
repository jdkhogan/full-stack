/*
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.
*/

// Returns a random DNA base
const returnRandBase = () => {
const dnaBases = ['A', 'T', 'C', 'G']
return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand;
}

function pAequorFactory(num, arr) {
    return {
        specimenNum: num,
        dna: arr,
        mutate() {
            const randIndex = (Math.ceil(Math.random() * arr.length)) - 1;
            let randBase;
            do {
                randBase = returnRandBase(); 
            } while (randBase == this.dna[randIndex]);
            
            this.dna[randIndex] = randBase;
            
            return this.dna;
        },
        compareDNA(pAequor2) {
            let sum = 0;
            for (let i in this.dna) {
                if (this.dna[i] === pAequor2.dna[i]) {
                    sum++;
                }
                // console.log(sum);
            }
            const avg = sum / this.dna.length;

            console.log(`Specimen #${this.specimenNum} and specimen #${pAequor2.specimenNum} have ${Math.round(avg * 100)}% DNA in common.`);
        },
        willLikelySurvive() {
            let sum = 0;
            for (let base of this.dna) {
                if (base == 'C' || base == 'G') {
                    sum++;
                }
            }
            return sum / this.dna.length > 0.6;
        },
        complementStrand() {
            const complements = {
                'A': 'T',
                'C': 'G',
                'G': 'C',
                'T': 'A'
            }; 
            return this.dna.map( s => complements[s] );
        }
    }
}
  
// test factory function
const pAequor = pAequorFactory(10, mockUpStrand());

// test mutute function
// console.log(pAequor);
// pAequor.mutate();
// console.log(pAequor);

// test compaareDNA function
const pAequor2 = pAequorFactory(11, mockUpStrand());
// pAequor.compareDNA(pAequor2);


// test will survive function
// console.log(pAequor.willLikelySurvive());

// build a test array of 30 instances that can survive in nature
const testArray = [];

while (testArray.length < 30) {
    let instance = pAequorFactory(testArray.length, mockUpStrand())
    while (instance.willLikelySurvive() == false) {
        instance = pAequorFactory(testArray.length, mockUpStrand());
    }
    testArray.push(instance);
}

// console.log(testArray.length);
// console.log(testArray[15]);

// test method to build the complementary DNA strand
// console.log(testArray[15].dna);
// console.log(testArray[15].complementStrand());
