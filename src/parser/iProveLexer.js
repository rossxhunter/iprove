// Generated from src/parser/iProve.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002)\u00f0\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0006\u0018\u00bb\n\u0018\r\u0018\u000e\u0018\u00bc\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0006\u001b\u00c4\n",
    "\u001b\r\u001b\u000e\u001b\u00c5\u0003\u001c\u0007\u001c\u00c9\n\u001c",
    "\f\u001c\u000e\u001c\u00cc\u000b\u001c\u0003\u001c\u0003\u001c\u0006",
    "\u001c\u00d0\n\u001c\r\u001c\u000e\u001c\u00d1\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 ",
    "\u0003 \u0003 \u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003",
    "$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003",
    "(\u0003(\u0002\u0002)\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b",
    "\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+",
    "\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e;\u001f= ?!A",
    "\"C#E$G%I&K\'M(O)\u0003\u0002\u0006\u0004\u0002C\\c|\u0003\u00022;\u0003",
    "\u000200\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002\u00f3\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f",
    "\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002#\u0003",
    "\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003\u0002",
    "\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002\u0002",
    "\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002\u0002",
    "\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u0002",
    "5\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u00029\u0003",
    "\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002\u0002=\u0003\u0002",
    "\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002A\u0003\u0002\u0002",
    "\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002",
    "\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002",
    "K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003",
    "\u0002\u0002\u0002\u0003Q\u0003\u0002\u0002\u0002\u0005V\u0003\u0002",
    "\u0002\u0002\u0007`\u0003\u0002\u0002\u0002\tg\u0003\u0002\u0002\u0002",
    "\u000bn\u0003\u0002\u0002\u0002\ru\u0003\u0002\u0002\u0002\u000f|\u0003",
    "\u0002\u0002\u0002\u0011\u0081\u0003\u0002\u0002\u0002\u0013\u0085\u0003",
    "\u0002\u0002\u0002\u0015\u0089\u0003\u0002\u0002\u0002\u0017\u008c\u0003",
    "\u0002\u0002\u0002\u0019\u0094\u0003\u0002\u0002\u0002\u001b\u0097\u0003",
    "\u0002\u0002\u0002\u001d\u009a\u0003\u0002\u0002\u0002\u001f\u009e\u0003",
    "\u0002\u0002\u0002!\u00a2\u0003\u0002\u0002\u0002#\u00a6\u0003\u0002",
    "\u0002\u0002%\u00ab\u0003\u0002\u0002\u0002\'\u00b1\u0003\u0002\u0002",
    "\u0002)\u00b3\u0003\u0002\u0002\u0002+\u00b5\u0003\u0002\u0002\u0002",
    "-\u00b7\u0003\u0002\u0002\u0002/\u00ba\u0003\u0002\u0002\u00021\u00be",
    "\u0003\u0002\u0002\u00023\u00c0\u0003\u0002\u0002\u00025\u00c3\u0003",
    "\u0002\u0002\u00027\u00ca\u0003\u0002\u0002\u00029\u00d3\u0003\u0002",
    "\u0002\u0002;\u00d5\u0003\u0002\u0002\u0002=\u00d8\u0003\u0002\u0002",
    "\u0002?\u00da\u0003\u0002\u0002\u0002A\u00dd\u0003\u0002\u0002\u0002",
    "C\u00e0\u0003\u0002\u0002\u0002E\u00e2\u0003\u0002\u0002\u0002G\u00e4",
    "\u0003\u0002\u0002\u0002I\u00e6\u0003\u0002\u0002\u0002K\u00e8\u0003",
    "\u0002\u0002\u0002M\u00ea\u0003\u0002\u0002\u0002O\u00ec\u0003\u0002",
    "\u0002\u0002QR\u0007e\u0002\u0002RS\u0007c\u0002\u0002ST\u0007u\u0002",
    "\u0002TU\u0007g\u0002\u0002U\u0004\u0003\u0002\u0002\u0002VW\u0007c",
    "\u0002\u0002WX\u0007t\u0002\u0002XY\u0007d\u0002\u0002YZ\u0007k\u0002",
    "\u0002Z[\u0007v\u0002\u0002[\\\u0007t\u0002\u0002\\]\u0007c\u0002\u0002",
    "]^\u0007t\u0002\u0002^_\u0007{\u0002\u0002_\u0006\u0003\u0002\u0002",
    "\u0002`a\u0007c\u0002\u0002ab\u0007u\u0002\u0002bc\u0007u\u0002\u0002",
    "cd\u0007w\u0002\u0002de\u0007o\u0002\u0002ef\u0007g\u0002\u0002f\b\u0003",
    "\u0002\u0002\u0002gh\u0007h\u0002\u0002hi\u0007q\u0002\u0002ij\u0007",
    "t\u0002\u0002jk\u0007c\u0002\u0002kl\u0007n\u0002\u0002lm\u0007n\u0002",
    "\u0002m\n\u0003\u0002\u0002\u0002no\u0007f\u0002\u0002op\u0007g\u0002",
    "\u0002pq\u0007h\u0002\u0002qr\u0007k\u0002\u0002rs\u0007p\u0002\u0002",
    "st\u0007g\u0002\u0002t\f\u0003\u0002\u0002\u0002uv\u0007g\u0002\u0002",
    "vw\u0007z\u0002\u0002wx\u0007k\u0002\u0002xy\u0007u\u0002\u0002yz\u0007",
    "v\u0002\u0002z{\u0007u\u0002\u0002{\u000e\u0003\u0002\u0002\u0002|}",
    "\u0007g\u0002\u0002}~\u0007z\u0002\u0002~\u007f\u0007k\u0002\u0002\u007f",
    "\u0080\u0007v\u0002\u0002\u0080\u0010\u0003\u0002\u0002\u0002\u0081",
    "\u0082\u0007p\u0002\u0002\u0082\u0083\u0007q\u0002\u0002\u0083\u0084",
    "\u0007v\u0002\u0002\u0084\u0012\u0003\u0002\u0002\u0002\u0085\u0086",
    "\u0007c\u0002\u0002\u0086\u0087\u0007p\u0002\u0002\u0087\u0088\u0007",
    "f\u0002\u0002\u0088\u0014\u0003\u0002\u0002\u0002\u0089\u008a\u0007",
    "q\u0002\u0002\u008a\u008b\u0007t\u0002\u0002\u008b\u0016\u0003\u0002",
    "\u0002\u0002\u008c\u008d\u0007k\u0002\u0002\u008d\u008e\u0007o\u0002",
    "\u0002\u008e\u008f\u0007r\u0002\u0002\u008f\u0090\u0007n\u0002\u0002",
    "\u0090\u0091\u0007k\u0002\u0002\u0091\u0092\u0007g\u0002\u0002\u0092",
    "\u0093\u0007u\u0002\u0002\u0093\u0018\u0003\u0002\u0002\u0002\u0094",
    "\u0095\u0007?\u0002\u0002\u0095\u0096\u0007@\u0002\u0002\u0096\u001a",
    "\u0003\u0002\u0002\u0002\u0097\u0098\u0007/\u0002\u0002\u0098\u0099",
    "\u0007@\u0002\u0002\u0099\u001c\u0003\u0002\u0002\u0002\u009a\u009b",
    "\u0007k\u0002\u0002\u009b\u009c\u0007h\u0002\u0002\u009c\u009d\u0007",
    "h\u0002\u0002\u009d\u001e\u0003\u0002\u0002\u0002\u009e\u009f\u0007",
    ">\u0002\u0002\u009f\u00a0\u0007?\u0002\u0002\u00a0\u00a1\u0007@\u0002",
    "\u0002\u00a1 \u0003\u0002\u0002\u0002\u00a2\u00a3\u0007>\u0002\u0002",
    "\u00a3\u00a4\u0007/\u0002\u0002\u00a4\u00a5\u0007@\u0002\u0002\u00a5",
    "\"\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007v\u0002\u0002\u00a7\u00a8",
    "\u0007t\u0002\u0002\u00a8\u00a9\u0007w\u0002\u0002\u00a9\u00aa\u0007",
    "g\u0002\u0002\u00aa$\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007h\u0002",
    "\u0002\u00ac\u00ad\u0007c\u0002\u0002\u00ad\u00ae\u0007n\u0002\u0002",
    "\u00ae\u00af\u0007u\u0002\u0002\u00af\u00b0\u0007g\u0002\u0002\u00b0",
    "&\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007*\u0002\u0002\u00b2(\u0003",
    "\u0002\u0002\u0002\u00b3\u00b4\u0007+\u0002\u0002\u00b4*\u0003\u0002",
    "\u0002\u0002\u00b5\u00b6\u0007]\u0002\u0002\u00b6,\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\u0007_\u0002\u0002\u00b8.\u0003\u0002\u0002\u0002",
    "\u00b9\u00bb\t\u0002\u0002\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002",
    "\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002",
    "\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd0\u0003\u0002\u0002\u0002",
    "\u00be\u00bf\u0007.\u0002\u0002\u00bf2\u0003\u0002\u0002\u0002\u00c0",
    "\u00c1\u0007<\u0002\u0002\u00c14\u0003\u0002\u0002\u0002\u00c2\u00c4",
    "\t\u0003\u0002\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c5",
    "\u0003\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c6",
    "\u0003\u0002\u0002\u0002\u00c66\u0003\u0002\u0002\u0002\u00c7\u00c9",
    "\t\u0003\u0002\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c9\u00cc",
    "\u0003\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\u0003\u0002\u0002\u0002\u00cb\u00cd\u0003\u0002\u0002\u0002\u00cc\u00ca",
    "\u0003\u0002\u0002\u0002\u00cd\u00cf\t\u0004\u0002\u0002\u00ce\u00d0",
    "\t\u0003\u0002\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002\u00d0\u00d1",
    "\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\u0003\u0002\u0002\u0002\u00d28\u0003\u0002\u0002\u0002\u00d3\u00d4",
    "\u0007>\u0002\u0002\u00d4:\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007",
    ">\u0002\u0002\u00d6\u00d7\u0007?\u0002\u0002\u00d7<\u0003\u0002\u0002",
    "\u0002\u00d8\u00d9\u0007@\u0002\u0002\u00d9>\u0003\u0002\u0002\u0002",
    "\u00da\u00db\u0007@\u0002\u0002\u00db\u00dc\u0007?\u0002\u0002\u00dc",
    "@\u0003\u0002\u0002\u0002\u00dd\u00de\u0007?\u0002\u0002\u00de\u00df",
    "\u0007?\u0002\u0002\u00dfB\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007",
    "-\u0002\u0002\u00e1D\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007/\u0002",
    "\u0002\u00e3F\u0003\u0002\u0002\u0002\u00e4\u00e5\u0007`\u0002\u0002",
    "\u00e5H\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007,\u0002\u0002\u00e7",
    "J\u0003\u0002\u0002\u0002\u00e8\u00e9\u00071\u0002\u0002\u00e9L\u0003",
    "\u0002\u0002\u0002\u00ea\u00eb\u00070\u0002\u0002\u00ebN\u0003\u0002",
    "\u0002\u0002\u00ec\u00ed\t\u0005\u0002\u0002\u00ed\u00ee\u0003\u0002",
    "\u0002\u0002\u00ee\u00ef\b(\u0002\u0002\u00efP\u0003\u0002\u0002\u0002",
    "\u0007\u0002\u00bc\u00c5\u00ca\u00d1\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function iProveLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

iProveLexer.prototype = Object.create(antlr4.Lexer.prototype);
iProveLexer.prototype.constructor = iProveLexer;

Object.defineProperty(iProveLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

iProveLexer.EOF = antlr4.Token.EOF;
iProveLexer.CASE = 1;
iProveLexer.ARBITRARY = 2;
iProveLexer.ASSUME = 3;
iProveLexer.FORALL = 4;
iProveLexer.DEFINE = 5;
iProveLexer.EXISTS = 6;
iProveLexer.EXIT = 7;
iProveLexer.NOT = 8;
iProveLexer.AND = 9;
iProveLexer.OR = 10;
iProveLexer.IMPLIES = 11;
iProveLexer.IMPLIES2 = 12;
iProveLexer.IMPLIES3 = 13;
iProveLexer.IFF = 14;
iProveLexer.IFF2 = 15;
iProveLexer.IFF3 = 16;
iProveLexer.TRUE = 17;
iProveLexer.FALSE = 18;
iProveLexer.BRACKET_OPEN = 19;
iProveLexer.BRACKET_CLOSE = 20;
iProveLexer.SQ_BRACKET_OPEN = 21;
iProveLexer.SQ_BRACKET_CLOSE = 22;
iProveLexer.IDENTIFIER = 23;
iProveLexer.COMMA = 24;
iProveLexer.COLON = 25;
iProveLexer.INTEGER = 26;
iProveLexer.REAL = 27;
iProveLexer.LESSTHAN = 28;
iProveLexer.LESSTHANEQ = 29;
iProveLexer.GREATERTHAN = 30;
iProveLexer.GREATERTHANEQ = 31;
iProveLexer.DOUBLEEQUALS = 32;
iProveLexer.PLUS = 33;
iProveLexer.MINUS = 34;
iProveLexer.POWER = 35;
iProveLexer.MULTIPLY = 36;
iProveLexer.DIVIDE = 37;
iProveLexer.POINT = 38;
iProveLexer.WS = 39;

iProveLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

iProveLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

iProveLexer.prototype.literalNames = [ null, "'case'", "'arbitrary'", "'assume'", 
                                       "'forall'", "'define'", "'exists'", 
                                       "'exit'", "'not'", "'and'", "'or'", 
                                       "'implies'", "'=>'", "'->'", "'iff'", 
                                       "'<=>'", "'<->'", "'true'", "'false'", 
                                       "'('", "')'", "'['", "']'", null, 
                                       "','", "':'", null, null, "'<'", 
                                       "'<='", "'>'", "'>='", "'=='", "'+'", 
                                       "'-'", "'^'", "'*'", "'/'", "'.'" ];

iProveLexer.prototype.symbolicNames = [ null, "CASE", "ARBITRARY", "ASSUME", 
                                        "FORALL", "DEFINE", "EXISTS", "EXIT", 
                                        "NOT", "AND", "OR", "IMPLIES", "IMPLIES2", 
                                        "IMPLIES3", "IFF", "IFF2", "IFF3", 
                                        "TRUE", "FALSE", "BRACKET_OPEN", 
                                        "BRACKET_CLOSE", "SQ_BRACKET_OPEN", 
                                        "SQ_BRACKET_CLOSE", "IDENTIFIER", 
                                        "COMMA", "COLON", "INTEGER", "REAL", 
                                        "LESSTHAN", "LESSTHANEQ", "GREATERTHAN", 
                                        "GREATERTHANEQ", "DOUBLEEQUALS", 
                                        "PLUS", "MINUS", "POWER", "MULTIPLY", 
                                        "DIVIDE", "POINT", "WS" ];

iProveLexer.prototype.ruleNames = [ "CASE", "ARBITRARY", "ASSUME", "FORALL", 
                                    "DEFINE", "EXISTS", "EXIT", "NOT", "AND", 
                                    "OR", "IMPLIES", "IMPLIES2", "IMPLIES3", 
                                    "IFF", "IFF2", "IFF3", "TRUE", "FALSE", 
                                    "BRACKET_OPEN", "BRACKET_CLOSE", "SQ_BRACKET_OPEN", 
                                    "SQ_BRACKET_CLOSE", "IDENTIFIER", "COMMA", 
                                    "COLON", "INTEGER", "REAL", "LESSTHAN", 
                                    "LESSTHANEQ", "GREATERTHAN", "GREATERTHANEQ", 
                                    "DOUBLEEQUALS", "PLUS", "MINUS", "POWER", 
                                    "MULTIPLY", "DIVIDE", "POINT", "WS" ];

iProveLexer.prototype.grammarFileName = "iProve.g4";



exports.iProveLexer = iProveLexer;
