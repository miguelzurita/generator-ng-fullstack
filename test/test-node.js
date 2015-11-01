import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../_ng/known_paths';
import {NodeFactory, NodeStandard, NodeBabel, NodeTypescript} from '../_ng/node';

describe('node', () => {
  describe('factory', () => {
    it('should have the right values for the tokens', () => {
      expect(NodeFactory.tokens.NODE).to.equal('node');
      expect(NodeFactory.tokens.NODE_BABEL).to.equal('babel');
      expect(NodeFactory.tokens.NODE_TYPESCRIPT).to.equal('typescript');
    });

    it('should have an instance of NodeStandard', () => {
      expect(NodeFactory.build({transpilerServer: 'node'}) instanceof NodeStandard).to.be.true;
    });

    it('should have an instance of NodeBabel', () => {
      expect(NodeFactory.build({transpilerServer: 'babel'}) instanceof NodeBabel).to.be.true;
    });

    it('should have an instance of NodeTypescript', () => {
      expect(NodeFactory.build({transpilerServer: 'typescript'}) instanceof NodeTypescript).to.be.true;
    });
  });

  describe('node_standard', () => {
    describe('creation', () => {
      it('should have the wrapper as the object passed by param', () => {
        let _newGenerator = {a: true};

        let _n = new NodeStandard(_newGenerator);

        expect(_n.wrapper).to.equal(_newGenerator);
      })
    })

    describe('copyFiles', () => {
      it('should call the right methods with the right params', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy()
        }

        let _n = new NodeStandard(_newGenerator);

        _n.copyFiles();

        let _firstCall = [`node/node/endpoint.route.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}.route.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _secondCall = [`node/node/endpoint.controller.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}.controller.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _thirdCall = [`node/node/endpoint.dao.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}.dao.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fourthCall = [`node/node/endpoint.model.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}.model.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fifthCall = [`node/node/endpoint.dao_test.js`, `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/dao/${_newGenerator.name}.dao_test.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), feature: _newGenerator.feature}];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
      });
    });
  })

  describe('node_babel', () => {
    describe('creation', () => {
      it('should have the wrapper as the object passed by param', () => {
        let _newGenerator = {a: true};

        let _n = new NodeBabel(_newGenerator);

        expect(_n.wrapper).to.equal(_newGenerator);
      })
    })

    describe('copyFiles', () => {
      it('should call the right methods with the right params', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy()
        }

        let _n = new NodeBabel(_newGenerator);

        _n.copyFiles();

        let _firstCall = [`node/babel/endpoint.route.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}.route.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _secondCall = [`node/babel/endpoint.controller.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}.controller.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _thirdCall = [`node/babel/endpoint.dao.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}.dao.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fourthCall = [`node/babel/endpoint.model.js`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}.model.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fifthCall = [`node/babel/endpoint.dao_test.js`, `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/dao/${_newGenerator.name}.dao_test.js`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), feature: _newGenerator.feature}];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
      });
    });
  })

  describe('node_typescript', () => {
    describe('creation', () => {
      it('should have the wrapper as the object passed by param', () => {
        let _newGenerator = {a: true};

        let _n = new NodeTypescript(_newGenerator);

        expect(_n.wrapper).to.equal(_newGenerator);
      })
    })

    describe('copyFiles', () => {
      it('should call the right methods with the right params', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          template: sinon.spy()
        }

        let _n = new NodeTypescript(_newGenerator);

        _n.copyFiles();

        let _firstCall = [`node/typescript/endpoint.route.ts`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/routes/${_newGenerator.name}.route.ts`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _secondCall = [`node/typescript/endpoint.controller.ts`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/controller/${_newGenerator.name}.controller.ts`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _thirdCall = [`node/typescript/endpoint.dao.ts`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/dao/${_newGenerator.name}.dao.ts`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fourthCall = [`node/typescript/endpoint.model.ts`, `${knownPaths.PATH_SERVER_FEATURES + _newGenerator.feature}/model/${_newGenerator.name}.model.ts`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase()}];
        let _fifthCall = [`node/typescript/endpoint.dao_test.ts`, `${knownPaths.PATH_SERVER_FEATURES_TEST + _newGenerator.feature}/dao/${_newGenerator.name}.dao_test.ts`, {name: _newGenerator.name, nameLowerCase: _newGenerator.name.toLowerCase(), feature: _newGenerator.feature}];

        expect(_n.wrapper.template).to.have.been.called;
        expect(_n.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdCall[0], _thirdCall[1], _thirdCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fourthCall[0], _fourthCall[1], _fourthCall[2])).to.be.true;
        expect(_n.wrapper.template.calledWith(_fifthCall[0], _fifthCall[1], _fifthCall[2])).to.be.true;
      });
    });

    describe('copyForMainGenerator', () => {
      it('should call with the right params', () => {
        let _newGenerator = {
          feature: 'a',
          name: 'b',
          directory: sinon.spy(),
          template: sinon.spy()
        }

        let _n = new NodeTypescript(_newGenerator);

        _n.copyForMainGenerator();

        let _directoryCall = [`server_node_typescript`, 'server'];

        let _firstTemplateCall = [`index_tsc.js`, 'index.js'];
        let _secondTemplateCall = [`server_node_typescript/tsconfig.json`, `tsconfig.json`];
        let _thirdTemplatecall = [`server_node_typescript/tsd.json`, `tsd.json`];

        expect(_n.wrapper.template).to.have.been.called;

        expect(_n.wrapper.directory.calledWith(_directoryCall[0], _directoryCall[1])).to.be.true;

        expect(_n.wrapper.template.calledWith(_firstTemplateCall[0], _firstTemplateCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_secondTemplateCall[0], _secondTemplateCall[1])).to.be.true;
        expect(_n.wrapper.template.calledWith(_thirdTemplatecall[0], _thirdTemplatecall[1])).to.be.true;
      });
    })
  });
})