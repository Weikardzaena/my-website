import { LegalRoutingModule } from './legal-routing.module';

describe('LegalRoutingModule', () => {
  let legalRoutingModule: LegalRoutingModule;

  beforeEach(() => {
    legalRoutingModule = new LegalRoutingModule();
  });

  it('should create an instance', () => {
    expect(legalRoutingModule).toBeTruthy();
  });
});
