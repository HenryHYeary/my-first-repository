class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(distance) {
    let distanceCounter = 0;

    if (this.strand.length > distance.length) {
      distance.split('').forEach((nAcid, index) => {
        if (nAcid !== this.strand[index]) {
          distanceCounter += 1;
        }
      });
    } else {
      this.strand.split('').forEach((nAcid, index) => {
        if (nAcid !== distance[index]) {
          distanceCounter += 1;
        }
      });
    }

    return distanceCounter;
  }
}

module.exports = DNA;