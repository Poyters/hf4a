import { getCrewTypesByColors, getCrewColors } from './crews';

describe('Test getCrewTypesByColors', () => {
  it('Should return related crews getCrewTypesByColors 1', () => {
    expect(getCrewTypesByColors([])).toEqual([]);
  });

  it('Should return related crews getCrewTypesByColors 2', () => {
    expect(getCrewTypesByColors(['violet'])).toEqual(['B', 'C']);
  });

  it('Should return related crews getCrewTypesByColors 2', () => {
    expect(getCrewTypesByColors(['violet'])).toEqual(['B', 'C']);
  });

  it('Should return related crews getCrewTypesByColors 2', () => {
    expect(getCrewTypesByColors(['violet', 'gray'])).toEqual([
      'B',
      'C',
      'K',
      'J',
    ]);
  });
});

describe('Test getCrewColors', () => {
  it('Should return the colors of the crews 1', () => {
    expect(getCrewColors([])).toEqual([]);
  });

  it('Should not return colors for invalid crews 1', () => {
    expect(getCrewColors(['JJJ'])).toEqual([]);
  });

  it('Should not return colors for invalid crews 2', () => {
    expect(getCrewColors(['GDHDT', 'J'])).toEqual(['gray']);
  });

  it('Should not return colors for invalid crews 3', () => {
    expect(getCrewColors(['GDHDT', 'J', 'fgg-', 'A', 'bfb'])).toEqual([
      'gray',
      'yellow',
    ]);
  });

  // it('Should return the colors of the crews 2', () => {
  //   expect(getCrewColors(['B', 'J', 'K'])).toEqual(['violet', 'gray']);
  // });
});
