/*! sass.js - v0.10.9 (3e41106) - built 2018-02-06
  providing libsass 3.4.9 (6de5050d)
  via emscripten 1.37.33 ()
 */

(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Sass = factory();
  }
}(this, function () {/*global document*/
// identify the path sass.js is located at in case we're loaded by a simple
// <script src="path/to/sass.js"></script>
// this path can be used to identify the location of
// * sass.worker.js from sass.js
// * libsass.js.mem from sass.sync.js
// see https://github.com/medialize/sass.js/pull/32#issuecomment-103142214
// see https://github.com/medialize/sass.js/issues/33
var SASSJS_RELATIVE_PATH = (function() {
  'use strict';

  // in Node things are rather simple
  if (typeof __dirname !== 'undefined') {
    return __dirname;
  }

  // we can only run this test in the browser,
  // so make sure we actually have a DOM to work with.
  if (typeof document === 'undefined' || !document.getElementsByTagName) {
    return null;
  }

  // http://www.2ality.com/2014/05/current-script.html
  var currentScript = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  var path = currentScript && currentScript.src;
  if (!path) {
    return null;
  }

  // [worker] make sure we're not running in some concatenated thing
  if (path.slice(-8) === '/sass.js') {
    return path.slice(0, -8);
  }

  // [sync] make sure we're not running in some concatenated thing
  if (path.slice(-13) === '/sass.sync.js') {
    return path.slice(0, -13);
  }

  return null;
})() || '.';

var ZMS_HEAPU8 = require("./heapu8.exclude.js");
eval(require("./module.raw.exclude"));// EMSCRIPTEN_START_ASM
var asm=(/** @suppress {uselessCode} */ function(global,env,buffer) {
"almost asm";var a=global.Int8Array;var b=new a(buffer);var c=global.Int16Array;var d=new c(buffer);var e=global.Int32Array;var f=new e(buffer);var g=global.Uint8Array;var h=new g(buffer);var i=global.Uint16Array;var j=new i(buffer);var k=global.Uint32Array;var l=new k(buffer);var m=global.Float32Array;var n=new m(buffer);var o=global.Float64Array;var p=new o(buffer);var q=global.byteLength;var r=env.DYNAMICTOP_PTR|0;var s=env.tempDoublePtr|0;var t=env.ABORT|0;var u=env.STACKTOP|0;var v=env.STACK_MAX|0;var w=env.cttz_i8|0;var x=0;var y=0;var z=0;var A=0;var B=global.NaN,C=global.Infinity;var D=0,E=0,F=0,G=0,H=0.0;var I=0;var J=global.Math.floor;var K=global.Math.abs;var L=global.Math.sqrt;var M=global.Math.pow;var N=global.Math.cos;var O=global.Math.sin;var P=global.Math.tan;var Q=global.Math.acos;var R=global.Math.asin;var S=global.Math.atan;var T=global.Math.atan2;var U=global.Math.exp;var V=global.Math.log;var W=global.Math.ceil;var X=global.Math.imul;var Y=global.Math.min;var Z=global.Math.max;var _=global.Math.clz32;var $=env.abort;var aa=env.assert;var ba=env.enlargeMemory;var ca=env.getTotalMemory;var da=env.abortOnCannotGrowMemory;var ea=env.invoke_ddd;var fa=env.invoke_ddi;var ga=env.invoke_di;var ha=env.invoke_dii;var ia=env.invoke_diii;var ja=env.invoke_diiiii;var ka=env.invoke_diiiiidd;var la=env.invoke_i;var ma=env.invoke_id;var na=env.invoke_iddd;var oa=env.invoke_iddddii;var pa=env.invoke_idi;var qa=env.invoke_ii;var ra=env.invoke_iid;var sa=env.invoke_iii;var ta=env.invoke_iiii;var ua=env.invoke_iiiii;var va=env.invoke_iiiiid;var wa=env.invoke_iiiiii;var xa=env.invoke_iiiiiid;var ya=env.invoke_iiiiiii;var za=env.invoke_iiiiiiii;var Aa=env.invoke_iiiiiiiii;var Ba=env.invoke_iiiiiiiiiii;var Ca=env.invoke_iiiiiiiiiiii;var Da=env.invoke_iiiiiiiiiiiii;var Ea=env.invoke_v;var Fa=env.invoke_vi;var Ga=env.invoke_vii;var Ha=env.invoke_viidii;var Ia=env.invoke_viii;var Ja=env.invoke_viiii;var Ka=env.invoke_viiiii;var La=env.invoke_viiiiii;var Ma=env.invoke_viiiiiii;var Na=env.invoke_viiiiiiii;var Oa=env.invoke_viiiiiiiiii;var Pa=env.invoke_viiiiiiiiiiiiiii;var Qa=env.__ZSt18uncaught_exceptionv;var Ra=env.___assert_fail;var Sa=env.___buildEnvironment;var Ta=env.___cxa_allocate_exception;var Ua=env.___cxa_begin_catch;var Va=env.___cxa_call_unexpected;var Wa=env.___cxa_end_catch;var Xa=env.___cxa_find_matching_catch;var Ya=env.___cxa_find_matching_catch_2;var Za=env.___cxa_find_matching_catch_3;var _a=env.___cxa_find_matching_catch_4;var $a=env.___cxa_find_matching_catch_6;var ab=env.___cxa_find_matching_catch_8;var bb=env.___cxa_free_exception;var cb=env.___cxa_get_exception_ptr;var db=env.___cxa_pure_virtual;var eb=env.___cxa_rethrow;var fb=env.___cxa_throw;var gb=env.___gxx_personality_v0;var hb=env.___lock;var ib=env.___map_file;var jb=env.___resumeException;var kb=env.___setErrNo;var lb=env.___syscall140;var mb=env.___syscall145;var nb=env.___syscall146;var ob=env.___syscall183;var pb=env.___syscall195;var qb=env.___syscall220;var rb=env.___syscall221;var sb=env.___syscall3;var tb=env.___syscall5;var ub=env.___syscall54;var vb=env.___syscall6;var wb=env.___syscall91;var xb=env.___unlock;var yb=env.__addDays;var zb=env.__arraySum;var Ab=env.__exit;var Bb=env.__isLeapYear;var Cb=env._abort;var Db=env._dlclose;var Eb=env._dlerror;var Fb=env._dlopen;var Gb=env._dlsym;var Hb=env._emscripten_asm_const_ii;var Ib=env._emscripten_asm_const_iii;var Jb=env._emscripten_asm_const_iiii;var Kb=env._emscripten_get_now;var Lb=env._emscripten_memcpy_big;var Mb=env._emscripten_set_main_loop;var Nb=env._emscripten_set_main_loop_timing;var Ob=env._emscripten_sleep;var Pb=env._exit;var Qb=env._getenv;var Rb=env._llvm_ceil_f64;var Sb=env._llvm_eh_typeid_for;var Tb=env._llvm_fabs_f64;var Ub=env._llvm_floor_f64;var Vb=env._llvm_pow_f64;var Wb=env._llvm_trap;var Xb=env._llvm_trunc_f64;var Yb=env._pthread_cond_wait;var Zb=env._pthread_getspecific;var _b=env._pthread_key_create;var $b=env._pthread_once;var ac=env._pthread_setspecific;var bc=env._strftime;var cc=env._strftime_l;var dc=0.0;var ec=0;var fc=env.EMTSTACKTOP|0;var gc=env.EMT_STACK_MAX|0;var hc=env.eb|0;function ic(newBuffer){if(q(newBuffer)&16777215||q(newBuffer)<=16777215||q(newBuffer)>2147483648)return false;b=new a(newBuffer);d=new c(newBuffer);f=new e(newBuffer);h=new g(newBuffer);j=new i(newBuffer);l=new k(newBuffer);n=new m(newBuffer);p=new o(newBuffer);buffer=newBuffer;return true}
// EMSCRIPTEN_START_FUNCS
eval(require("./j.raw.exclude"));
eval(require("./x.raw.exclude"));
eval(require("./o.raw.exclude"));
eval(require("./s.raw.exclude"));
eval(require("./l.raw.exclude"));
eval(require("./g.raw.exclude"));
eval(require("./h.raw.exclude"));
eval(require("./g1.raw.exclude"));
eval(require("./f.raw.exclude"));
eval(require("./e.raw.exclude"));
eval(require("./e1.raw.exclude"));
eval(require("./d.raw.exclude"));
eval(require("./d1.raw.exclude"));
eval(require("./d2.raw.exclude"));
eval(require("./c.raw.exclude"));
eval(require("./c1.raw.exclude"));
eval(require("./c2.raw.exclude"));
eval(require("./9.raw.exclude"));

// EMSCRIPTEN_END_FUNCS
var jc=[Gra,Pqa,Mqa,Nqa,Oqa,CX,Gra,Gra];var kc=[vra,IP];var lc=[Bsa,ii,ji,qO,Zpa,Bqa,tqa,uqa,vqa,Bsa,Bsa,Bsa,Bsa,Bsa,Bsa,Bsa];var mc=[ira,Pe];var nc=[lpa,HF,JF,IF];var oc=[qha,pm,om,Yn];var pc=[hba,yg];var qc=[Tsa,TX,hY,kO,Eca,Ksa,Jsa,Qsa,Nba,ffa,eP,JS,Tsa,Tsa,Tsa,Tsa];var rc=[Gsa,yI,GU,Gsa];var sc=[zqa,wE];var tc=[tfa,ao];var uc=[qra,cQ];var vc=[xsa,El,qR,aX,Ira,Jqa,lra,ula,ska,Yja,Dra,CY,rpa,Mra,yC,qX,Sqa,wra,eH,fI,Pma,pR,TW,VA,mS,BD,cX,Hra,vR,mX,dR,pW,Xt,kra,kR,KW,oB,VQ,eW,eR,sW,jR,BW,tR,bX,qE,qW,HD,SW,KD,nX,LD,oX,hD,VW,$qa,AR,FX,TM,xR,BX,wR,tX,uR,lX,JD,$W,ED,JW,fR,AW,iR,zW,gH,UW,lr,JA,sX,lga,By,nna,eI,xq,$C,AX,Ega,hz,KQ,EV,lS,xB,wB,RE,tC,IV,Fs,mR,OW,QA,LW,iI,Kp,WQ,fW,BQ,sV,Tz,ID,NW,br,WA,pX,uX,wF,WW,Coa,Pna,BB,EB,bW,rG,oG,gB,Oz,BC,NV,TR,qC,cW,cR,oW,SH,wQ,gV,SQ,UV,Zqa,JQ,BV,wD,CV,AQ,qV,rD,fV,XQ,gW,YQ,hW,cra,Vra,fH,rX,jsa,ora,Ora,fC,IW,yD,yW,gI,IO,WD,OV,$y,Vu,pqa,Bp,bqa,spa,fqa,Epa,$N,QV,qqa,cqa,cia,AP,rV,Nna,upa,EP,JV,BL,LP,VV,uoa,SP,rW,Soa,Gt,FQ,yV,Rna,nI,vF,PV,qY,XL,lI,uF,HV,UU,OE,KE,FD,Gy,DV,QH,kB,hB,TE,uD,XH,Lqa,oqa,CF,LQ,KV,tx,qp,op,LN,EE,TQ,dW,EH,mB,jB,OC,jE,VH,i1,V_,bC,loa,Mna,oJ,XM,wqa,Iqa,Xqa,Qn,wm,Cpa,Qoa,Roa,Dpa,Wpa,DS,Qda,koa,Lna,Pda,UM,lqa,qia,IE,JE,aia,zja,bia,Aja,Vga,JO,GO,KO,mC,lC,kC,nC,Uga,EO,BO,FO,$w,_w,Zw,ax,cpa,bpa,Bpa,apa,$oa,Apa,Xna,Wna,zpa,Vna,Una,ypa,_oa,noa,Koa,Ht,soa,MB,Bna,Ana,wna,ina,jpa,toa,Poa,Zoa,moa,Joa,xpa,Opa,Cra,Bra,fja,Era,sra,bN,k9,xF,Wd,zp,Yba,Tba,QQ,Ng,eO,npa,Woa,Kpa,Noa,NE,Lpa,d7,Jaa,Xpa,aW,vba,Fba,qla,Zja,Caa,R1,Yaa,pK,eX,vla,vo,Px,eQ,qH,zE,cC,mV,OM,JM,LM,NM,KM,MM,h4,oI,lx,Xy,tG,MC,NH,SN,Vx,SX,pG,Sl,XB,_N,AK,jq,bH,dH,nW,YV,wpa,jW,iv,CB,Nz,Kqa,$pa,Ipa,P5,kH,yoa,hqa,gqa,jqa,Spa,jma,ST,oz,Sp,bd,rO,dN,Kg,Zm,XU,Kna,boa,cna,yS,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa,xsa];var wc=[pra,Cn];var xc=[dra,aL,O3,e3,W1,N3,o4,F5,zR,Y9,eg,Ag,E9,Z7,r7,i8,v8,M8,l5,z4,j3,k5,K5,I6,XP,_P,F3,_2,U1,E3,k4,D5,s4,Q3,y2,r4,a5,f6,e5,u4,g3,d5,H5,F6,X0,v0,t$,W0,B1,P2,o2,N1,E0,n2,V2,f4,U$,n$,t_,T$,r0,z1,a1,z0,v$,$0,D1,R2,I1,h1,$$,H1,i2,y3,q4,P3,x2,p4,$4,e6,Z0,w0,u$,Y0,C1,Q2,D3,Z2,T1,C3,j4,C5,g5,v4,h3,f5,I5,G6,i5,w4,i3,h5,J5,H6,J3,b3,V1,I3,l4,E5,N6,m6,s5,M6,f7,M7,l6,S5,C4,k6,L6,t7,O5,q5,S3,N5,h6,c7,c5,t4,f3,b5,G5,E6,n4,L3,w2,m4,_4,d6,M1,k1,f0,L1,m2,A3,g1,C0,y$,f1,G1,U2,e1,B0,x$,d1,F1,T2,a3,u2,m1,$2,H3,Y4,p5,B4,l3,o5,M5,K6,iq,UP,VP,R5,r5,T3,Q5,j6,e7,Zn,zZ,fZ,MY,yZ,JZ,D_,Kj,NZ,BZ,XY,MZ,f_,Y_,tm,t2,S1,H0,s2,Y2,i4,ep,P1,l1,g0,O1,p2,B3,Fpa,ZP,bQ,p$,R_,a_,o$,V$,T0,_k,IY,vY,fY,HY,UY,qZ,r2,Q1,F0,q2,W2,g4,aB,y4,R3,z2,x4,j5,g6,_K,d3,v2,n1,c3,K3,Z4,WR,i$,O_,ZZ,h$,Q$,Q0,Nr,Kz,H8,w8,_7,G8,N8,_8,j_,SZ,gZ,i_,E_,J$,Mq,k$,P_,_Z,j$,R$,R0,Nq,u0,Z$,T_,t0,V0,g2,yP,CP,mY,cY,QX,lY,sY,RY,a$,I_,WZ,$_,N$,J0,tZ,cZ,JY,sZ,GZ,A_,DE,vZ,dZ,KY,uZ,HZ,B_,RN,EY,tY,dY,DY,SY,oZ,rca,kY,bY,PX,jY,rY,QY,_ba,r$,S_,b_,q$,W$,U0,Y$,s$,u_,X$,s0,A1,n5,A4,k3,m5,L5,J6,Wga,K1,j1,e0,J1,l2,z3,c1,A0,w$,b1,E1,S2,YP,$P,l_,TZ,hZ,k_,F_,K$,yB,zB,v5,F4,n3,u5,Y5,Q6,FS,oR,wj,vca,Hw,p_,VZ,jZ,o_,H_,M$,GY,uY,eY,FY,TY,pZ,PZ,CZ,YY,OZ,g_,Z_,jh,Rz,Kl,eB,jy,Ez,N_,s_,EZ,M_,g$,q0,_U,y0,_$,U_,x0,_0,h2,et,bZ,VY,wY,aZ,rZ,d_,Qz,hj,ey,al,n_,UZ,iZ,m_,G_,L$,Kr,zz,$q,ky,en,qG,LZ,AZ,WY,KZ,e_,X_,yz,xj,Mr,iy,Dn,az,xZ,eZ,LY,wZ,IZ,C_,rB,sB,dq,Vj,MP,PP,eE,RZ,DZ,ZY,QZ,h_,__,tB,uB,jm,lm,dz,m$,Q_,$Z,l$,S$,S0,DM,rR,YH,cE,Jj,HP,NP,Bja,$k,$E,Lp,rH,qm,Gfa,dI,Wfa,gga,uga,Jda,tea,bea,sfa,aea,wea,Ke,fga,uea,Ef,Dh,Oe,Gpa,Qh,Bd,md,Fi,CI,Xfa,rfa,Oea,Nea,ig,Ti,Zc,ke,ad,vl,Kda,jea,bi,dpa,kpa,Uoa,wf,Ft,YA,Zca,Cm,_q,Rn,Qr,jk,Jf,Zi,tpa,ro,qfa,Mea,mh,Sd,Yg,Lca,sda,Lda,vea,_ca,Dda,Gi,Bu,Aj,yj,x7,gj,Kd,a8,j8,fm,Ae,sg,Bi,J4,xf,_e,kh,Xi,O8,a9,b9,cp,pj,zd,hd,bj,fz,Sh,ki,xh,kd,y8,I8,_1,D2,K4,k0,X3,w5,v7,$7,k8,N7,G4,H4,o3,p1,X1,Y1,i0,b$,Z5,c$,L4,x8,r3,g7,s6,w7,h7,p3,j0,E2,Y3,_5,q1,q3,C2,Z1,F2,I4,z6,G7,X6,p7,C7,c2,_3,N2,b6,K2,b4,U4,o7,$3,W6,D7,E7,Z6,m8,d8,V7,B7,m7,Y6,a6,T4,S4,U7,c8,p0,O0,L2,L_,d2,x3,x6,n7,F7,_6,I2,J2,v1,O$,n0,o0,J_,XZ,Z3,YZ,M2,T7,y1,$5,R4,y6,c6,w1,K_,P0,e2,a4,P$,x1,N0,Sn,Be,Ij,Ffa,mo,Hd,ega,BI,Fl,Hi,ei,ud,mj,me,Lea,dga,rea,Sfa,rga,sga,Ufa,nha,_ga,Kga,qga,bga,Tfa,ofa,Kea,Jea,Jga,Zga,gda,pda,_da,Kca,Hda,iea,Dfa,cga,tga,Vfa,Xda,Yda,zda,Xca,dda,eda,Ica,gca,qea,hca,$da,Ppa,Cda,nfa,Iea,Efa,pfa,Ada,Jca,qda,Ida,sea,Yca,Bda,oda,fda,rda,Zda,RJ,Faa,UJ,$J,cK,lJ,CJ,wJ,NJ,tJ,FJ,JJ,_J,DJ,TJ,dK,eK,WJ,nK,mK,jK,bK,YJ,VJ,MJ,xJ,IJ,iK,lK,bJ,eJ,uJ,UI,mJ,AJ,PJ,ZJ,fK,XJ,qJ,rJ,hJ,YI,_I,$I,SI,OI,BJ,PI,vJ,hK,kJ,LJ,HJ,QJ,OJ,iJ,TI,fJ,nJ,EJ,ZI,jJ,dJ,aJ,gJ,sJ,Wba,Bca,bca,kca,yca,fba,yba,pba,Rba,mba,Bba,Jba,jca,zba,aca,zca,Aca,dca,$ca,Tca,Mca,xca,ica,cca,Qba,Iba,Hba,zF,Lq,Naa,Uaa,nba,raa,c_,h0,Vba,hG,y_,wda,kba,z_,pQ,Daa,Kaa,Laa,paa,eaa,xba,faa,oba,yna,aba,Pba,Gba,AI,OF,_aa,qaa,Vaa,gba,Aba,Eaa,$aa,Taa,Maa,Waa,lba,V6,S7,j7,A7,P7,G2,N4,w3,v6,t3,Q4,A5,z7,O4,i7,Q7,R7,l7,z8,l8,b8,O7,y7,k7,u6,z5,y5,Fm,Toa,Ax,s1,u3,f$,xna,Ina,U6,voa,Aoa,poa,s3,Cna,kna,l0,K0,L0,d$,q_,M4,r_,v3,Moa,b2,t6,x5,EF,w6,$1,e$,t1,H2,P4,m0,a2,r1,M0,u1,Cx,eba,jba,dba,iba,ou,ru,ku,lu,YU,PU,Loa,lW,mW,jna,ap,yo,fO,it,rr,Gm,xe,sT,$u,An,mZ,Le,$la,Go,FV,Wy,zn,lB,LC,vP,Ln,am,Zq,Lj,hH,gF,Gx,_i,Ny,jM,nZ,QE,dx,Ul,Ej,Qm,gl,Dz,vh,Cy,hy,Ut,Wu,df,Rk,NA,rT,zo,Gs,uE,_F,gQ,nr,_t,Zg,je,pl,pg,Jn,ND,Yw,In,Qi,wl,Ge,dg,Sx,hO,$n,aqa,roa,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra,dra];var yc=[epa,jd,dy,ls,Wm,Ud,$t,Nt,Bx,hu,mda,sE,VD,mz,av,WL,QC,ZM,DQ,lda,bE,MD,jN,EX,wI,zI,RQ,PQ,QR,PR,RO,SO,cda,BT,VO,WO,Vca,fE,KX,nv,qD,eD,Zj,cd,vr,ZR,Do,ut,um,tw,On,pF,AA,uu,Qx,Mu,ew,$v,Nu,Cu,Gu,Qs,pv,Ku,Ox,vp,Pu,Pv,Ou,cu,fu,Ns,cr,Xv,Tw,Ow,Xw,Jw,Lw,Kw,Ww,Uw,Et,js,Su,Nv,Mv,Lu,vv,Zv,Ju,To,ow,Lx,Uv,Zx,Tr,Cv,Yr,vt,mv,Bw,qw,zw,Rw,Mt,tt,Wr,Vv,Mw,Nw,Cw,Qv,Lv,Kv,Hv,Ev,rw,sw,xw,kw,zv,Av,tv,ww,fw,Bv,Ks,Dv,yv,vw,gw,nw,Rv,Jv,Gw,jw,Sw,Vw,Dx,Tv,Os,pr,zt,Du,ri,lw,Gv,sv,rv,du,Iw,Ew,Ls,he,Ji,vd,fh,de,se,Ps,DD,Cla,wS,tD,xN,pV,fp,co,DC,LB,qy,sha,sN,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa,epa];var zc=[uma,ET,ZN,lO,dO,RT,IM,jg,Ix,Wz,gs,Ii,Cj,kx,mx,Uz,Fr,nL,FC,TC,UC,AC,vD,IA,OD,Tj,Xma,yu,uma,uma,uma,uma];var Ac=[$ha,Am,zm,ym,xm,yn,$ha,$ha];var Bc=[gha,LI,gK,Rp,lv,kv,nx,Mp,hv,gv,cx,c0,qU,qA,uz,zQ,iO,D0,MW,b0,lU,FG,Yo,bn,an,_m,Pn,Xn,dd,Jm,Em,ue,Sg,Vl,ho,Py,fx,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha,gha];var Cc=[kda,Ni,Li,kda];var Dc=[Nca,to,UG,TG,NG,IG,OG,MG,AG,CG,BG,Hg,so,SG,RG,KG,HG,LG,JG,xG,zG,yG,Gg,zx,yx,xx,wx,vG,aD,SD,RD,_D,uG,XC,QD,PD,ZD,Yk,Pk,Ar,Wp,Ld,Lo,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca,Nca];var Ec=[iaa,$A,ZA,sj,ak,rj,$j,wk,Pi,uo,Kq,Iq,Jq,mm,Um,bl,Xo,Qp,kq,Wn,sn,nn,eh,gn,oj,mq,li,wg,Tl,Ql,ge,_d,$d,Wf,Jg,Wl,wo,tf,Cg,He,Wk,Xk,ci,Gp,hr,gr,ir,zi,Ai,ne,Mf,Cd,Td,Ne,wd,Md,Qd,Qg,Hh,Wj,gg,Nj,lj,tl,vf,lq,Jl,xn,ch,Qj,Oj,Rj,Sj,Bl,ee,Dp,Pj,Gh,wi,qe,qd,hh,Tg,jo,Gl,Bh,pu,Vd,Th,Uh,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa,iaa];var Fc=[t8,Yf,Xf,yK,zK,dk,hk,AS,ES,wK,xK,t8,t8,t8,t8,t8];var Gc=[hX,Br,Er,hX];var Hc=[$U,rd,pd,$U];var Ic=[QT,Fo,dp,QT];var Jc=[Vsa,Jra,KA,zsa,gsa,Dca,Mba,Tu,jp,XI,Ru,ip,VI,yja,xja,rka,hfa,nda,Tea,Uea,T9,S9,R9,Q9,Rga,Qga,Pga,Oga,L9,K9,J9,I9,AT,zT,gN,fN,eja,dja,EW,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa,Vsa];var Kc=[Osa,CE,aE,era,csa,Tra,RV,SU,tP,$ia,XG,Ona,wM,kL,xL,MK,Fia,D6,x_,bha,nka,Nia,Dea,WU,mU,c4,_Y,Cka,uQ,dQ,Xha,O2,xY,SV,TU,Lja,XW,cT,RI,ZH,VM,YL,sia,mea,gja,Wea,hja,Xea,tia,nea,fX,vV,MQ,kQ,lH,DG,s7,I$,Mia,Cea,Nha,Sda,dS,ER,Vha,cS,DR,Jia,gra,xM,mL,yL,NK,SE,Voa,zoa,Rja,WE,xE,B9,O6,zfa,uca,QW,nV,kM,gL,uL,IK,_ia,xra,DW,MS,d9,E4,u8,WV,W8,tW,hra,aM,bL,iG,sL,GK,X5,hV,Az,tV,cJ,bI,sI,IH,zea,P8,m3,o1,gY,Hfa,z9,n6,Yfa,Yea,$ba,c9,D4,Gda,wba,O9,X7,f2,nY,eha,ura,dX,eT,fM,fL,tL,HK,Gia,Afa,wca,$ga,yga,wga,kS,CQ,rQ,xQ,GQ,OQ,mN,CM,JP,QO,FP,PO,Ex,kG,NF,sz,XF,tF,jga,Zfa,Zia,hga,RX,CW,Nm,_C,zC,tz,IC,Gka,xga,DP,TO,FF,jF,$G,gaa,Rf,Nra,zX,naa,$X,aY,rL,eL,zJ,KI,VR,sR,qL,dL,yJ,JI,PK,DK,rK,GJ,rI,hI,_W,caa,$9,aaa,NX,OX,xX,laa,XX,YX,$ma,ana,Oja,mka,msa,dqa,rqa,Gqa,Nja,RH,sca,Ska,vga,dha,iga,TH,Tda,yM,zL,uP,cP,uN,iN,qB,oaa,aha,Ifa,bfa,uja,Iha,Iia,Yha,Lga,Wha,tja,fha,Hha,Gha,Mja,hka,Dka,Tka,hla,sja,lka,kka,Zha,Iaa,w9,_fa,ika,yO,JN,sO,EN,FM,EL,vja,tu,Zna,jka,cha,Cqa,fra,AL,VK,Hia,Pja,hF,Yna,JL,hL,lL,KK,Boa,Bma,ona,vfa,Qra,woa,yR,QP,Ypa,Tqa,tra,ara,bra,LO,DO,CO,tO,IN,NU,uO,HO,NO,OU,zO,Yqa,WM,pna,uba,W9,tba,V9,yX,maa,ZX,_X,wX,kaa,VX,WX,zra,Mpa,zna,cja,Bga,Sja,Cga,Tja,Sga,Jka,Tga,Kka,joa,yma,jaa,ioa,xma,Rca,Raa,Qca,Qaa,Pca,Paa,Oca,Oaa,Gca,Haa,Fca,Gaa,C6,w_,B6,v_,una,Xja,tna,Wja,sna,Vja,rna,Uja,qca,zaa,pca,yaa,oca,xaa,nca,waa,doa,Nla,coa,Mla,Kra,Lha,vha,aK,lea,DI,Ela,kX,qna,pY,_la,oY,Zla,Dla,zma,Kha,tha,uha,Xoa,gpa,eoa,lla,Uqa,Qea,yqa,xqa,dea,nsa,Tna,jra,Bea,vna,fea,Ama,hna,gna,ima,rsa,hoa,esa,Hna,tda,kea,Mda,PN,gea,NN,TP,PW,gk,ON,$h,GV,oV,foa,tQ,Sea,RW,Jo,G9,b7,eqa,M3,ev,Qna,mra,Zl,cB,SM,dE,ui,UR,Xh,oi,Uu,BP,Qma,Vr,pM,yF,ty,I0,Ly,LA,nE,Wh,Aaa,a0,Hoa,Lra,sP,wh,LT,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa,Osa];var Lc=[Ura,TK,SK,UK,$8,oN,Kia,X9,Saa,ZK,YK,q9,yha,Kfa,gC,kD,xea,Y8,i9,n9,n8,J8,W7,p8,A8,h9,o8,X8,o9,p9,Z8,F9,A9,x9,m9,g9,D8,s8,r8,U8,s9,oQ,_ka,Eba,baa,dC,iD,cea,y9,nR,N9,g8,tca,W5,pC,p6,L8,BU,E8,jC,Zh,$V,hC,lD,Pea,K7,W3,K8,j9,pO,V8,kV,H7,hN,Fha,daa,W_,P6,eN,d0,I7,e8,Sba,UB,ZC,B2,u7,T5,U5,U3,A2,L7,Y7,r9,xV,C8,q8,Vk,uV,eC,jD,yea,R6,t9,hea,fy,T6,$R,V3,q6,q7,f8,t5,S6,o6,V5,Hca,Lba,_B,cD,ada,r6,cO,J7,VU,mD,hda,Zba,ZB,bD,Uca,Kf,xha,tg,vg,cy,Xla,mf,HH,tma,Gma,NI,WI,Bka,eF,yka,gla,pla,sma,ela,ema,Hma,Ima,gma,lna,_ma,Vma,Fma,qma,fma,Jla,ola,nla,Uma,Zma,Via,nja,zka,Qha,fka,Rka,Vla,rma,Jma,hma,vka,wka,Gja,yia,Sia,Tia,Oha,iha,dla,jha,Aka,Tma,Jja,Ila,mla,Wla,Kla,Hja,Pha,oja,gka,fla,zia,Ija,mja,Uia,pja,xka,Hla,CA,ye,Fz,lma,ti,Yh,Tq,kg,fn,ul,Kx,WK,_x,Vy,Ey,Fy,Nn,lo,Ym,nj,Ct,Iy,zD,Hy,Qo,rp,of,nz,Sf,ar,fG,CC,aV,dV,AV,Ay,Od,UE,ds,ez,So,dia,hi,Hn,Ip,EI,Mm,kn,yp,eG,UF,Xu,bu,Io,Vq,GG,_M,FH,BE,FE,Km,jr,Vo,PF,_f,Mi,gx,Jt,Zs,lp,gy,ol,KH,il,Je,hE,ZU,pma,Rla,dma,Dja,Nka,eka,yla,bka,Qka,cla,cma,Oka,Qla,mma,nma,Tla,Yma,Sma,Ema,kma,ama,Sla,xla,bla,ala,Dma,Rma,xia,Pia,cka,Bha,Eja,uka,Fla,bma,oma,Ula,_ja,$ja,ija,uia,via,zha,Xga,Mka,Yga,dka,Cma,lja,wla,$ka,Gla,zla,jja,Aha,Qia,Fja,Pka,eia,kja,Oia,wia,Ria,aka,Eha,ML,Qf,iia,Bia,qI,xI,Rfa,YE,Ofa,pga,Iga,hia,nga,Rha,Cia,Dia,Tha,Kja,rja,Yia,Aia,fia,Sha,lha,Hga,Gga,Xia,qja,Hea,_ea,Pfa,Wda,Bfa,aga,Cha,gia,Eia,Uha,Lfa,Mfa,jfa,oea,Eea,Fea,Uda,xda,mga,yda,Qfa,Wia,mfa,kha,Fga,Dha,mha,kfa,Vda,$ea,Cfa,oga,pea,lfa,Zea,Gea,afa,Nfa,wha,$O,aP,BK,CK,vS,rS,jS,GN,G$,H$,uS,qS,iS,FN,E$,F$,tS,pS,hS,zN,C$,D$,sS,oS,gS,yN,A$,B$,ppa,opa,a7,MF,LF,$6,PA,OA,rx,Ur,T8,uy,YC,xy,bS,HU,dB,VC,KB,ot,IB,Ux,MA,Wo,vy,XA,Uy,Us,kt,QB,pt,$x,zy,rA,HA,np,Ho,yy,mA,VB,Ov,oy,GB,FB,NB,oC,sC,HB,wy,_R,Un,Cz,PC,ry,wt,ox,bs,py,Ze,xs,Xm,Fg,qs,IQ,gd,us,sq,tr,As,mt,Rs,jl,ws,wq,vq,pA,_y,QU,be,PM,tka,Vg,nN,Oy,Lt,EC,nO,kga,TF,bO,lA,Xj,qM,Ir,ug,tA,Pp,Cl,Dl,RB,gA,SB,hA,KU,Fq,kz,Es,Bm,fF,wG,Df,Cr,DA,Tf,si,ms,yq,iL,Uf,yl,Qw,ah,Ds,Hq,dA,ZO,UO,Pd,GF,Ie,$g,ag,bg,Cf,ce,qz,bf,ld,Rd,Xd,zf,rf,Pm,ie,ae,Uk,Jd,Ry,Bf,zg,Of,le,pB,We,eo,fo,bo,hg,Re,lg,kl,id,vj,Xe,Fh,dj,af,Se,oh,Dd,ek,Sm,gh,xC,oe,_h,bq,Xq,gi,ix,jf,hf,gf,Cs,ai,aq,Yi,Im,Ri,Yp,ok,pe,te,ns,Xx,Lz,oo,fA,sy,TA,JH,GH,zq,yt,cl,Hr,nA,gp,Gq,aA,Pq,fk,Jz,cA,eA,_p,iA,kf,gz,Pz,pn,Rl,cw,Xg,Ro,em,ju,lP,at,ys,aC,mn,Pr,Yl,bv,Oq,Hp,jA,mP,yE,DB,$B,fB,ifa,Uba,bA,LK,lG,jG,xd,vB,_s,rs,cL,pi,Up,vA,cz,fD,YN,rC,Co,MH,PY,OY,lZ,kZ,jX,iX,YW,ZW,zY,yY,FU,EU,DU,CU,JX,IX,HX,GX,vU,uU,tU,sU,zU,yU,xU,wU,BY,AY,FK,OP,oK,wP,PE,$H,wO,kW,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura,Ura];var Mc=[Ala,fl];var Nc=[Aqa,Xp,WT,IU,fU,UT,_T,cU,tT,IT,lT,vT,CT,ZT,uT,TT,dU,eU,VT,rU,nU,jU,bU,YT,GT,yT,xT,NT,hU,kU,TS,VS,KT,HT,jT,IS,JT,$T,OT,gT,LU,ZS,hT,oT,CS,fT,QS,RS,GS,BS,kT,mT,gU,FT,wT,_S,iU,aT,HS,WS,bT,pT,LS,$S,US,SS,XS,iT,R8,iE,mE,mQ,pE,ko,Jha,sA,wA,wz,yf,qf,Yc,Or,_j,or,Mn,Mo,my,gP,Hz,lE,FA,iF,bp,vx,BA,Jy,Dg,v9,Sca,Fe,go,kk,Zz,Ig,Ep,Mg,fi,De,sd,eu,cs,vu,Au,ef,lQ,EQ,fd,qt,sf,Vs,pf,uf,Lf,as,_z,nB,Hs,Dba,nf,NS,vm,Zk,un,aG,Bz,Cp,px,pp,Ed,cf,no,di,LV,Nd,xg,fe,Yy,qo,LH,ct,nG,$e,Vn,$c,Xba,qba,EG,el,XK,WC,HC,GC,$z,dv,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa,Aqa];var Oc=[$na,aQ,pD,HR,GR,vE,zA,XO,vL,TD,Dy,rba,gq,oO,zr,ze,St,Bg,ed,Zf,Fd,Mj,Ve,Qt,Ky,My,Id,Eg,yd,aw,DF,fv,bw,Fv,qv,ft,Ci,cj,ml,qx,fq,Ce,ps,eq,fg,Xc,nl,Rh,xi,dl,X2,Vz,$na,$na,$na,$na,$na,$na,$na,$na,$na,$na,$na,$na];var Pc=[Uka,GD,ux,rm,TB,Vh,Pg,RK,Is,Oi,Ue,_l,dh,ks,rq,ts,cm,nd,Uka,Uka,Uka,Uka,Uka,Uka,Uka,Uka,Uka,Uka,Uka,Uka,Uka,Uka];var Qc=[cfa,mr,Mz,jQ,iQ,Lr,Xl,HN,EK,ny,ay,re,kp,nh,xr,yr,Ot,Ad,$l,er,tq,Dr,Jr,Zd,od,we,up,cfa,cfa,cfa,cfa,cfa];var Rc=[Kba,oq,tp,Rg,Vf,cq,_c,Ui,Om,zl,yi,xl,qi,Kba,Kba,Kba];var Sc=[H9,Op];var Tc=[iY,qg,ng,$f,cg,iY,iY,iY];var Uc=[bR,Dj,zj,bR];return{__GLOBAL__I_000101:Fra,__GLOBAL__sub_I_ast_cpp:uj,__GLOBAL__sub_I_ast_fwd_decl_cpp:rk,__GLOBAL__sub_I_bind_cpp:Lk,__GLOBAL__sub_I_check_nesting_cpp:qk,__GLOBAL__sub_I_color_maps_cpp:Wc,__GLOBAL__sub_I_context_cpp:Dk,__GLOBAL__sub_I_cssize_cpp:Ik,__GLOBAL__sub_I_emitter_cpp:_o,__GLOBAL__sub_I_environment_cpp:tk,__GLOBAL__sub_I_error_handling_cpp:pk,__GLOBAL__sub_I_eval_cpp:Ak,__GLOBAL__sub_I_expand_cpp:Hk,__GLOBAL__sub_I_extend_cpp:Gk,__GLOBAL__sub_I_file_cpp:zk,__GLOBAL__sub_I_functions_cpp:Pf,__GLOBAL__sub_I_inspect_cpp:Ck,__GLOBAL__sub_I_iostream_cpp:Hsa,__GLOBAL__sub_I_listize_cpp:Bk,__GLOBAL__sub_I_node_cpp:Kk,__GLOBAL__sub_I_output_cpp:Fk,__GLOBAL__sub_I_parser_cpp:Ek,__GLOBAL__sub_I_remove_placeholders_cpp:mk,__GLOBAL__sub_I_sass2scss_cpp:KP,__GLOBAL__sub_I_sass_context_cpp:Ok,__GLOBAL__sub_I_sass_cpp:Nk,__GLOBAL__sub_I_sass_functions_cpp:nk,__GLOBAL__sub_I_sass_util_cpp:xk,__GLOBAL__sub_I_sass_values_cpp:sk,__GLOBAL__sub_I_source_map_cpp:vk,__GLOBAL__sub_I_subset_map_cpp:uk,__GLOBAL__sub_I_to_c_cpp:Jk,__GLOBAL__sub_I_to_value_cpp:yk,__GLOBAL__sub_I_units_cpp:dt,__GLOBAL__sub_I_util_cpp:Sk,__GLOBAL__sub_I_values_cpp:Qk,___cxa_can_catch:pP,___cxa_is_pointer_type:Cca,___errno_location:Msa,___muldi3:xS,___udivdi3:Oda,___uremdi3:FR,_bitshift64Lshr:vW,_bitshift64Shl:TV,_emscripten_replace_memory:ic,_free:wh,_i64Add:A6,_i64Subtract:MX,_llvm_bswap_i32:efa,_llvm_round_f64:dna,_malloc:Gd,_memcpy:gu,_memmove:YO,_memset:KC,_pthread_cond_broadcast:Sra,_pthread_mutex_lock:fsa,_pthread_mutex_unlock:Wra,_sass_compile_emscripten:$r,_sbrk:$M,dynCall_ddd:Eka,dynCall_ddi:jia,dynCall_di:Jna,dynCall_dii:zga,dynCall_diii:bba,dynCall_diiiii:LX,dynCall_diiiiidd:oU,dynCall_i:Dqa,dynCall_id:_na,dynCall_iddd:jda,dynCall_iddddii:gX,dynCall_idi:pha,dynCall_ii:bna,dynCall_iid:oha,dynCall_iii:Rea,dynCall_iiii:saa,dynCall_iiiii:B5,dynCall_iiiiid:UX,dynCall_iiiiii:DX,dynCall_iiiiiid:eV,dynCall_iiiiiii:RU,dynCall_iiiiiiii:OS,dynCall_iiiiiiiii:JR,dynCall_iiiiiiiiiii:qP,dynCall_iiiiiiiiiiii:xO,dynCall_iiiiiiiiiiiii:BN,dynCall_v:yra,dynCall_vi:xoa,dynCall_vii:_ha,dynCall_viidii:z$,dynCall_viii:Oba,dynCall_viiii:Q8,dynCall_viiiii:NY,dynCall_viiiiii:wV,dynCall_viiiiiii:PT,dynCall_viiiiiiii:aS,dynCall_viiiiiiiiii:GP,dynCall_viiiiiiiiiiiiiii:wL,emtStackRestore:Rra,emtStackSave:Fsa,emterpret:Vc,establishStackSpace:Sna,getEmtStackMax:Asa,getTempRet0:Lsa,runPostSets:vN,setAsyncState:dsa,setEmtStackMax:Pra,setTempRet0:usa,setThrew:rla,stackAlloc:lca,stackRestore:osa,stackSave:Nsa}})


// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg,Module.asmLibraryArg,buffer);var __GLOBAL__I_000101=Module["__GLOBAL__I_000101"]=asm["__GLOBAL__I_000101"];var __GLOBAL__sub_I_ast_cpp=Module["__GLOBAL__sub_I_ast_cpp"]=asm["__GLOBAL__sub_I_ast_cpp"];var __GLOBAL__sub_I_ast_fwd_decl_cpp=Module["__GLOBAL__sub_I_ast_fwd_decl_cpp"]=asm["__GLOBAL__sub_I_ast_fwd_decl_cpp"];var __GLOBAL__sub_I_bind_cpp=Module["__GLOBAL__sub_I_bind_cpp"]=asm["__GLOBAL__sub_I_bind_cpp"];var __GLOBAL__sub_I_check_nesting_cpp=Module["__GLOBAL__sub_I_check_nesting_cpp"]=asm["__GLOBAL__sub_I_check_nesting_cpp"];var __GLOBAL__sub_I_color_maps_cpp=Module["__GLOBAL__sub_I_color_maps_cpp"]=asm["__GLOBAL__sub_I_color_maps_cpp"];var __GLOBAL__sub_I_context_cpp=Module["__GLOBAL__sub_I_context_cpp"]=asm["__GLOBAL__sub_I_context_cpp"];var __GLOBAL__sub_I_cssize_cpp=Module["__GLOBAL__sub_I_cssize_cpp"]=asm["__GLOBAL__sub_I_cssize_cpp"];var __GLOBAL__sub_I_emitter_cpp=Module["__GLOBAL__sub_I_emitter_cpp"]=asm["__GLOBAL__sub_I_emitter_cpp"];var __GLOBAL__sub_I_environment_cpp=Module["__GLOBAL__sub_I_environment_cpp"]=asm["__GLOBAL__sub_I_environment_cpp"];var __GLOBAL__sub_I_error_handling_cpp=Module["__GLOBAL__sub_I_error_handling_cpp"]=asm["__GLOBAL__sub_I_error_handling_cpp"];var __GLOBAL__sub_I_eval_cpp=Module["__GLOBAL__sub_I_eval_cpp"]=asm["__GLOBAL__sub_I_eval_cpp"];var __GLOBAL__sub_I_expand_cpp=Module["__GLOBAL__sub_I_expand_cpp"]=asm["__GLOBAL__sub_I_expand_cpp"];var __GLOBAL__sub_I_extend_cpp=Module["__GLOBAL__sub_I_extend_cpp"]=asm["__GLOBAL__sub_I_extend_cpp"];var __GLOBAL__sub_I_file_cpp=Module["__GLOBAL__sub_I_file_cpp"]=asm["__GLOBAL__sub_I_file_cpp"];var __GLOBAL__sub_I_functions_cpp=Module["__GLOBAL__sub_I_functions_cpp"]=asm["__GLOBAL__sub_I_functions_cpp"];var __GLOBAL__sub_I_inspect_cpp=Module["__GLOBAL__sub_I_inspect_cpp"]=asm["__GLOBAL__sub_I_inspect_cpp"];var __GLOBAL__sub_I_iostream_cpp=Module["__GLOBAL__sub_I_iostream_cpp"]=asm["__GLOBAL__sub_I_iostream_cpp"];var __GLOBAL__sub_I_listize_cpp=Module["__GLOBAL__sub_I_listize_cpp"]=asm["__GLOBAL__sub_I_listize_cpp"];var __GLOBAL__sub_I_node_cpp=Module["__GLOBAL__sub_I_node_cpp"]=asm["__GLOBAL__sub_I_node_cpp"];var __GLOBAL__sub_I_output_cpp=Module["__GLOBAL__sub_I_output_cpp"]=asm["__GLOBAL__sub_I_output_cpp"];var __GLOBAL__sub_I_parser_cpp=Module["__GLOBAL__sub_I_parser_cpp"]=asm["__GLOBAL__sub_I_parser_cpp"];var __GLOBAL__sub_I_remove_placeholders_cpp=Module["__GLOBAL__sub_I_remove_placeholders_cpp"]=asm["__GLOBAL__sub_I_remove_placeholders_cpp"];var __GLOBAL__sub_I_sass2scss_cpp=Module["__GLOBAL__sub_I_sass2scss_cpp"]=asm["__GLOBAL__sub_I_sass2scss_cpp"];var __GLOBAL__sub_I_sass_context_cpp=Module["__GLOBAL__sub_I_sass_context_cpp"]=asm["__GLOBAL__sub_I_sass_context_cpp"];var __GLOBAL__sub_I_sass_cpp=Module["__GLOBAL__sub_I_sass_cpp"]=asm["__GLOBAL__sub_I_sass_cpp"];var __GLOBAL__sub_I_sass_functions_cpp=Module["__GLOBAL__sub_I_sass_functions_cpp"]=asm["__GLOBAL__sub_I_sass_functions_cpp"];var __GLOBAL__sub_I_sass_util_cpp=Module["__GLOBAL__sub_I_sass_util_cpp"]=asm["__GLOBAL__sub_I_sass_util_cpp"];var __GLOBAL__sub_I_sass_values_cpp=Module["__GLOBAL__sub_I_sass_values_cpp"]=asm["__GLOBAL__sub_I_sass_values_cpp"];var __GLOBAL__sub_I_source_map_cpp=Module["__GLOBAL__sub_I_source_map_cpp"]=asm["__GLOBAL__sub_I_source_map_cpp"];var __GLOBAL__sub_I_subset_map_cpp=Module["__GLOBAL__sub_I_subset_map_cpp"]=asm["__GLOBAL__sub_I_subset_map_cpp"];var __GLOBAL__sub_I_to_c_cpp=Module["__GLOBAL__sub_I_to_c_cpp"]=asm["__GLOBAL__sub_I_to_c_cpp"];var __GLOBAL__sub_I_to_value_cpp=Module["__GLOBAL__sub_I_to_value_cpp"]=asm["__GLOBAL__sub_I_to_value_cpp"];var __GLOBAL__sub_I_units_cpp=Module["__GLOBAL__sub_I_units_cpp"]=asm["__GLOBAL__sub_I_units_cpp"];var __GLOBAL__sub_I_util_cpp=Module["__GLOBAL__sub_I_util_cpp"]=asm["__GLOBAL__sub_I_util_cpp"];var __GLOBAL__sub_I_values_cpp=Module["__GLOBAL__sub_I_values_cpp"]=asm["__GLOBAL__sub_I_values_cpp"];var ___cxa_can_catch=Module["___cxa_can_catch"]=asm["___cxa_can_catch"];var ___cxa_is_pointer_type=Module["___cxa_is_pointer_type"]=asm["___cxa_is_pointer_type"];var ___errno_location=Module["___errno_location"]=asm["___errno_location"];var ___muldi3=Module["___muldi3"]=asm["___muldi3"];var ___udivdi3=Module["___udivdi3"]=asm["___udivdi3"];var ___uremdi3=Module["___uremdi3"]=asm["___uremdi3"];var _bitshift64Lshr=Module["_bitshift64Lshr"]=asm["_bitshift64Lshr"];var _bitshift64Shl=Module["_bitshift64Shl"]=asm["_bitshift64Shl"];var _emscripten_replace_memory=Module["_emscripten_replace_memory"]=asm["_emscripten_replace_memory"];var _free=Module["_free"]=asm["_free"];var _i64Add=Module["_i64Add"]=asm["_i64Add"];var _i64Subtract=Module["_i64Subtract"]=asm["_i64Subtract"];var _llvm_bswap_i32=Module["_llvm_bswap_i32"]=asm["_llvm_bswap_i32"];var _llvm_round_f64=Module["_llvm_round_f64"]=asm["_llvm_round_f64"];var _malloc=Module["_malloc"]=asm["_malloc"];var _memcpy=Module["_memcpy"]=asm["_memcpy"];var _memmove=Module["_memmove"]=asm["_memmove"];var _memset=Module["_memset"]=asm["_memset"];var _pthread_cond_broadcast=Module["_pthread_cond_broadcast"]=asm["_pthread_cond_broadcast"];var _pthread_mutex_lock=Module["_pthread_mutex_lock"]=asm["_pthread_mutex_lock"];var _pthread_mutex_unlock=Module["_pthread_mutex_unlock"]=asm["_pthread_mutex_unlock"];var _sass_compile_emscripten=Module["_sass_compile_emscripten"]=asm["_sass_compile_emscripten"];var _sbrk=Module["_sbrk"]=asm["_sbrk"];var emtStackRestore=Module["emtStackRestore"]=asm["emtStackRestore"];var emtStackSave=Module["emtStackSave"]=asm["emtStackSave"];var emterpret=Module["emterpret"]=asm["emterpret"];var establishStackSpace=Module["establishStackSpace"]=asm["establishStackSpace"];var getEmtStackMax=Module["getEmtStackMax"]=asm["getEmtStackMax"];var getTempRet0=Module["getTempRet0"]=asm["getTempRet0"];var runPostSets=Module["runPostSets"]=asm["runPostSets"];var setAsyncState=Module["setAsyncState"]=asm["setAsyncState"];var setEmtStackMax=Module["setEmtStackMax"]=asm["setEmtStackMax"];var setTempRet0=Module["setTempRet0"]=asm["setTempRet0"];var setThrew=Module["setThrew"]=asm["setThrew"];var stackAlloc=Module["stackAlloc"]=asm["stackAlloc"];var stackRestore=Module["stackRestore"]=asm["stackRestore"];var stackSave=Module["stackSave"]=asm["stackSave"];var dynCall_ddd=Module["dynCall_ddd"]=asm["dynCall_ddd"];var dynCall_ddi=Module["dynCall_ddi"]=asm["dynCall_ddi"];var dynCall_di=Module["dynCall_di"]=asm["dynCall_di"];var dynCall_dii=Module["dynCall_dii"]=asm["dynCall_dii"];var dynCall_diii=Module["dynCall_diii"]=asm["dynCall_diii"];var dynCall_diiiii=Module["dynCall_diiiii"]=asm["dynCall_diiiii"];var dynCall_diiiiidd=Module["dynCall_diiiiidd"]=asm["dynCall_diiiiidd"];var dynCall_i=Module["dynCall_i"]=asm["dynCall_i"];var dynCall_id=Module["dynCall_id"]=asm["dynCall_id"];var dynCall_iddd=Module["dynCall_iddd"]=asm["dynCall_iddd"];var dynCall_iddddii=Module["dynCall_iddddii"]=asm["dynCall_iddddii"];var dynCall_idi=Module["dynCall_idi"]=asm["dynCall_idi"];var dynCall_ii=Module["dynCall_ii"]=asm["dynCall_ii"];var dynCall_iid=Module["dynCall_iid"]=asm["dynCall_iid"];var dynCall_iii=Module["dynCall_iii"]=asm["dynCall_iii"];var dynCall_iiii=Module["dynCall_iiii"]=asm["dynCall_iiii"];var dynCall_iiiii=Module["dynCall_iiiii"]=asm["dynCall_iiiii"];var dynCall_iiiiid=Module["dynCall_iiiiid"]=asm["dynCall_iiiiid"];var dynCall_iiiiii=Module["dynCall_iiiiii"]=asm["dynCall_iiiiii"];var dynCall_iiiiiid=Module["dynCall_iiiiiid"]=asm["dynCall_iiiiiid"];var dynCall_iiiiiii=Module["dynCall_iiiiiii"]=asm["dynCall_iiiiiii"];var dynCall_iiiiiiii=Module["dynCall_iiiiiiii"]=asm["dynCall_iiiiiiii"];var dynCall_iiiiiiiii=Module["dynCall_iiiiiiiii"]=asm["dynCall_iiiiiiiii"];var dynCall_iiiiiiiiiii=Module["dynCall_iiiiiiiiiii"]=asm["dynCall_iiiiiiiiiii"];var dynCall_iiiiiiiiiiii=Module["dynCall_iiiiiiiiiiii"]=asm["dynCall_iiiiiiiiiiii"];var dynCall_iiiiiiiiiiiii=Module["dynCall_iiiiiiiiiiiii"]=asm["dynCall_iiiiiiiiiiiii"];var dynCall_v=Module["dynCall_v"]=asm["dynCall_v"];var dynCall_vi=Module["dynCall_vi"]=asm["dynCall_vi"];var dynCall_vii=Module["dynCall_vii"]=asm["dynCall_vii"];var dynCall_viidii=Module["dynCall_viidii"]=asm["dynCall_viidii"];var dynCall_viii=Module["dynCall_viii"]=asm["dynCall_viii"];var dynCall_viiii=Module["dynCall_viiii"]=asm["dynCall_viiii"];var dynCall_viiiii=Module["dynCall_viiiii"]=asm["dynCall_viiiii"];var dynCall_viiiiii=Module["dynCall_viiiiii"]=asm["dynCall_viiiiii"];var dynCall_viiiiiii=Module["dynCall_viiiiiii"]=asm["dynCall_viiiiiii"];var dynCall_viiiiiiii=Module["dynCall_viiiiiiii"]=asm["dynCall_viiiiiiii"];var dynCall_viiiiiiiiii=Module["dynCall_viiiiiiiiii"]=asm["dynCall_viiiiiiiiii"];var dynCall_viiiiiiiiiiiiiii=Module["dynCall_viiiiiiiiiiiiiii"]=asm["dynCall_viiiiiiiiiiiiiii"];Module["asm"]=asm;Module["ccall"]=ccall;Module["getValue"]=getValue;Module["Pointer_stringify"]=Pointer_stringify;Module["stringToUTF8"]=stringToUTF8;Module["lengthBytesUTF8"]=lengthBytesUTF8;if(memoryInitializer){if(!isDataURI(memoryInitializer)){if(typeof Module["locateFile"]==="function"){memoryInitializer=Module["locateFile"](memoryInitializer)}else if(Module["memoryInitializerPrefixURL"]){memoryInitializer=Module["memoryInitializerPrefixURL"]+memoryInitializer}}if(ENVIRONMENT_IS_NODE||ENVIRONMENT_IS_SHELL){var data=Module["readBinary"](memoryInitializer);HEAPU8.set(data,GLOBAL_BASE)}else{addRunDependency("memory initializer");var applyMemoryInitializer=(function(data){if(data.byteLength)data=new Uint8Array(data);HEAPU8.set(data,GLOBAL_BASE);if(Module["memoryInitializerRequest"])delete Module["memoryInitializerRequest"].response;removeRunDependency("memory initializer")});function doBrowserLoad(){Module["readAsync"](memoryInitializer,applyMemoryInitializer,(function(){throw"could not load memory initializer "+memoryInitializer}))}var memoryInitializerBytes=tryParseAsDataURI(memoryInitializer);if(memoryInitializerBytes){applyMemoryInitializer(memoryInitializerBytes.buffer)}else if(Module["memoryInitializerRequest"]){function useRequest(){var request=Module["memoryInitializerRequest"];var response=request.response;if(request.status!==200&&request.status!==0){var data=tryParseAsDataURI(Module["memoryInitializerRequestURL"]);if(data){response=data.buffer}else{console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+request.status+", retrying "+memoryInitializer);doBrowserLoad();return}}applyMemoryInitializer(response)}if(Module["memoryInitializerRequest"].response){setTimeout(useRequest,0)}else{Module["memoryInitializerRequest"].addEventListener("load",useRequest)}}else{doBrowserLoad()}}}function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}ExitStatus.prototype=new Error;ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;dependenciesFulfilled=function runCaller(){if(!Module["calledRun"])run();if(!Module["calledRun"])dependenciesFulfilled=runCaller};function run(args){args=args||Module["arguments"];if(runDependencies>0){return}preRun();if(runDependencies>0)return;if(Module["calledRun"])return;function doRun(){if(Module["calledRun"])return;Module["calledRun"]=true;if(ABORT)return;ensureInitRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}Module["run"]=run;function exit(status,implicit){if(implicit&&Module["noExitRuntime"]&&status===0){return}if(Module["noExitRuntime"]){}else{ABORT=true;EXITSTATUS=status;STACKTOP=initialStackTop;exitRuntime();if(Module["onExit"])Module["onExit"](status)}if(ENVIRONMENT_IS_NODE){process["exit"](status)}Module["quit"](status,new ExitStatus(status))}Module["exit"]=exit;function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}if(what!==undefined){Module.print(what);Module.printErr(what);what=JSON.stringify(what)}else{what=""}ABORT=true;EXITSTATUS=1;throw"abort("+what+"). Build with -s ASSERTIONS=1 for more info."}Module["abort"]=abort;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}Module["noExitRuntime"]=true;run()





/*global Module*/
/*jshint strict:false, unused:false*/

function noop(){}


function stripLeadingSlash(text) {
  return text.slice(0, 1) === '/' ? text.slice(1) : text;
}

function addLeadingSlash(text) {
  return text.slice(0, 1) !== '/' ? ('/' + text) : text;
}

function stripTrailingSlash(text) {
  return text.slice(-1) === '/' ? text.slice(0, -1) : text;
}

function addTrailingSlash(text) {
  return text.slice(-1) !== '/' ? (text + '/') : text;
}


function pointerToString(pointer) {
  /*jshint camelcase:false*/
  return pointer && Module.Pointer_stringify(pointer) || null;
}

function stringToPointer(text) {
  // a character like ” takes 3 bytes, while .length would return 1
  // see https://github.com/medialize/sass.js/issues/72#issuecomment-263916386
  var bytes = Module.lengthBytesUTF8(text);
  var buffer = Module._malloc(bytes + 1);
  Module.stringToUTF8(text, buffer, bytes + 1);
  return buffer;
}

function pointerToJson(pointer) {
  var test = pointerToString(pointer);
  return test && JSON.parse(test) || null;
}

function pointerToStringArray(pointer) {
  var list = [];
  if (!pointer) {
    return list;
  }

  // TODO: are we limited to 32bit?
  for (var i=0; true; i+=4) {
    var _pointer = Module.getValue(pointer + i, '*');
    if (!_pointer) {
      break;
    }

    var _item = pointerToString(_pointer);
    _item && list.push(_item);
  }

  return list;
}

/*jshint strict:false, unused:false*/

var BooleanNumber = function(input) {
  // in emscripten you pass booleans as integer 0 and 1
  return Number(Boolean(input));
};

// map of arguments required by the emscripten wrapper (order relevant!)
// to not have to touch various different spots in this file,
// everything is defined here and registered in the appropriate places.
var options = [
  {
    // int output_style,
    type: 'number',
    // Output style for the generated css code
    // using Sass.style.*
    key: 'style',
    initial: 0,
    coerce: Number,
  },
  {
    // int precision,
    type: 'number',
    // Precision for outputting fractional numbers
    // 0: use libsass default
    key: 'precision',
    initial: -1,
    coerce: Number,
  },
  {
    // bool source_comments,
    type: 'number',
    // If you want inline source comments
    key: 'comments',
    initial: 0,
    coerce: BooleanNumber,
  },
  {
    // bool is_indented_syntax_src,
    type: 'number',
    // Treat source_string as SASS (as opposed to SCSS)
    key: 'indentedSyntax',
    initial: 0,
    coerce: BooleanNumber,
  },
  {
    // bool source_map_contents,
    type: 'number',
    // embed include contents in maps
    key: 'sourceMapContents',
    initial: 1,
    coerce: BooleanNumber,
  },
  {
    // bool source_map_embed,
    type: 'number',
    // embed sourceMappingUrl as data uri
    key: 'sourceMapEmbed',
    initial: 0,
    coerce: BooleanNumber,
  },
  {
    // bool omit_source_map_url,
    type: 'number',
    // Disable sourceMappingUrl in css output
    key: 'sourceMapOmitUrl',
    initial: 1,
    coerce: BooleanNumber,
  },
  {
    // char *source_map_root,
    type: 'string',
    // Pass-through as sourceRoot property
    key: 'sourceMapRoot',
    initial: 'root',
    coerce: String,
  },
  {
    // char *source_map_file,
    type: 'string',
    // Path to source map file
    // Enables the source map generating
    // Used to create sourceMappingUrl
    key: 'sourceMapFile',
    initial: 'file',
    coerce: String,
  },
  {
    // char *input_path,
    type: 'string',
    // The input path is used for source map generation.
    // It can be used to define something with string
    // compilation or to overload the input file path.
    // It is set to "stdin" for data contexts
    // and to the input file on file contexts.
    key: 'inputPath',
    initial: 'stdin',
    coerce: String,
  },
  {
    // char *output_path,
    type: 'string',
    // The output path is used for source map generation.
    // Libsass will not write to this file, it is just
    // used to create information in source-maps etc.
    key: 'outputPath',
    initial: 'stdout',
    coerce: String,
  },
  {
    // char *indent,
    type: 'string',
    // String to be used for indentation
    key: 'indent',
    initial: '  ',
    coerce: String,
  },
  {
    // char *linefeed,
    type: 'string',
    // String to be used to for line feeds
    key: 'linefeed',
    initial: '\n',
    coerce: String,
  },
];

/*global FS, PATH, Sass, stringToPointer*/
/*jshint strict:false*/

var Importer = {
  _running: false,
  _result: null,

  find: function(current, previous) {
    if (!Sass._importer) {
      Importer._running = false;
      return;
    }

    Importer._running = true;
    Importer._result = null;

    var resolved = PATH.resolve(previous === 'stdin' ? Sass._path : PATH.dirname(previous), current);
    var found = Sass.findPathVariation(FS.stat, resolved);
    var done = function done(result) {
      Importer._result = result;
      Importer._running = false;
    };

    try {
      Sass._importer({
        current: current,
        previous: previous,
        resolved: resolved,
        path: found,
        options: Sass._options.importer || null,
      }, done);
    } catch(e) {
      // allow emscripten to resume libsass,
      // if only to have it stop gracefully
      done({ error: e.message });
      // but don't just swallow the JS error
      console.error(e.stack);
    }
  },

  finished: function() {
    return !Importer._running;
  },

  path: function() {
    return Importer._resultPointer('path');
  },

  content: function() {
    return Importer._resultPointer('content');
  },

  error: function() {
    return Importer._resultPointer('error');
  },

  _resultPointer: function(key) {
    return Importer._result && Importer._result[key] !== undefined && stringToPointer(Importer._result[key]) || 0;
  },

};
/*global Module, FS, PATH, stripLeadingSlash, addTrailingSlash, XMLHttpRequest, noop, options*/
/*jshint strict:false*/

var Sass = {
  style: {
    nested: 0,
    expanded: 1,
    compact: 2,
    compressed: 3,
  },
  comments: {
    'none': 0,
    'default': 1,
  },

  _options: {
    // filled by sass.options.js
  },
  _defaultOptions: {
    // filled by sass.options.js
  },
  _optionTypes: {
    // filled by sass.options.js
  },

  _files: {},
  _path: '/sass/',

  FS: FS,
  PATH: PATH,
  Module: Module,

  // track if emscripten is initialized
  _initialized: false,
  // allow calling .compile() before emscripten is ready by "buffering" the call
  // (i.e. have the client not care about its asynchronous init)
  _ready: function() {
    Sass._initialized = true;
    // we may have buffered compile() calls during execution,
    Sass._compileNext();
  },

  _compileNext: function() {
    if (!Sass._compileQueue.length) {
      return;
    }
    // first in first out
    var args = Sass._compileQueue.shift();
    Sass.compile.apply(Sass, args);
  },

  options: function(options, callback) {
    if (options === 'defaults') {
      Sass.options(Sass._defaultOptions, callback);
      return;
    }

    if (typeof options !== 'object') {
      return;
    }

    Object.keys(options).forEach(function(key) {
      var _type = Sass._optionTypes[key];

      if (key === 'importer') {
        // allow passing compile() time options
        // to the importer callback
        Sass._options[key] = options[key];
        return;
      }

      // no need to import crap
      if (!_type) {
        throw new Error('Unknown option "' + key + '"');
      }

      // force expected data type
      Sass._options[key] = _type(options[key]);
    });

    callback && callback();
  },

  _cloneOptions: function() {
    var o = {};
    Object.keys(Sass._options).forEach(function(key) {
      o[key] = Sass._options[key];
    });

    return o;
  },

  importer: function(importerCallback, callback) {
    if (typeof importerCallback !== 'function' && importerCallback !== null) {
      throw new Error('importer callback must either be a function or null');
    }

    Sass._importer = importerCallback;
    callback && callback();
  },

  _absolutePath: function(filename) {
    return Sass._path + stripLeadingSlash(filename);
  },

  _createPath: function(parts) {
    var base = [];

    while (parts.length) {
      var directory = parts.shift();
      try {
        FS.createFolder(base.join('/'), directory, true, true);
      } catch(e) {
        // IGNORE file exists errors
      }

      base.push(directory);
    }
  },

  _ensurePath: function(filename) {
    var parts = filename.split('/');
    parts.pop();

    if (!parts.length) {
      return;
    }

    try {
      FS.stat(parts.join('/'));
      return;
    } catch(e) {
      Sass._createPath(parts);
    }
  },

  writeFile: function(filename, text, callback) {
    if (typeof filename === 'object') {
      callback = text;
      text = null;

      var map = {};
      Object.keys(filename).forEach(function(file) {
        Sass.writeFile(file, filename[file], function(result) {
          map[file] = result;
        });
      });

      callback && callback(map);
      return;
    }

    var _absolute = filename.slice(0, 1) === '/';
    var path = Sass._absolutePath(filename);
    try {
      Sass._ensurePath(path);
      FS.writeFile(path, text);
      Sass._files[path] = filename;
      // create symlink for absolute path resolution
      if (_absolute) {
        Sass._ensurePath(filename);
        FS.symlink(path, filename);
      }
      callback && callback(true);
    } catch(e) {
      callback && callback(false);
    }
  },

  readFile: function(filename, callback) {
    if (Array.isArray(filename)) {
      var map = {};
      filename.forEach(function(file) {
        Sass.readFile(file, function(result) {
          map[file] = result;
        });
      });

      callback && callback(map);
      return;
    }

    var path = Sass._absolutePath(filename);
    var result;
    try {
      result = FS.readFile(path, {encoding: 'utf8'});
    } catch(e) {}

    callback && callback(result);
  },

  listFiles: function(callback) {
    var list = Object.keys(Sass._files).map(function(path) {
      return Sass._files[path];
    });

    callback && callback(list);
  },

  removeFile: function(filename, callback) {
    if (Array.isArray(filename)) {
      var map = {};
      filename.forEach(function(file) {
        Sass.removeFile(file, function(result) {
          map[file] = result;
        });
      });

      callback && callback(map);
      return;
    }

    var _absolute = filename.slice(0, 1) === '/';
    var path = Sass._absolutePath(filename);
    try {
      FS.unlink(path);
      delete Sass._files[path];

      // undo symlink for absolute path resolution
      if (_absolute && FS.lstat(filename)) {
        FS.unlink(filename);
      }

      callback && callback(true);
    } catch(e) {
      callback && callback(false);
    }
  },

  clearFiles: function(callback) {
    Sass.listFiles(function(list) {
      list.forEach(function(file) {
        Sass.removeFile(file);
      });

      callback && callback();
    });
  },

  _handleFiles: function(base, directory, files, callback) {
    var _root = Sass._absolutePath(directory || '');
    _root = addTrailingSlash(_root);
    base = addTrailingSlash(base);

    return files.map(function(file) {
      file = stripLeadingSlash(file);

      var parts = file.split('/');
      var _file = parts.pop();
      var _path = _root + parts.join('/');
      _path = addTrailingSlash(_path);

      return callback(_path, _file, base + file);
    }, Sass);
  },

  _handleLazyFile: function(path, file, url) {
    Sass._ensurePath(path + file);
    FS.createLazyFile(path, file, url, true, false);
  },

  _preloadingFiles: 0,
  _preloadingFilesCallback: null,
  _handlePreloadFile: function(path, file, url) {
    Sass._ensurePath(path + file);

    Sass._preloadingFiles++;
    var request = new XMLHttpRequest();
    request.onload = function() {
      Sass.writeFile(path.slice(Sass._path.length) + file, this.responseText);

      Sass._preloadingFiles--;
      if (!Sass._preloadingFiles) {
        Sass._preloadingFilesCallback();
        Sass._preloadingFilesCallback = null;
      }
    };

    request.open('get', url, true);
    request.send();
  },

  lazyFiles: function(base, directory, files, callback) {
    Sass._handleFiles(base, directory, files, Sass._handleLazyFile);
    callback && callback();
  },

  preloadFiles: function(base, directory, files, callback) {
    Sass._preloadingFilesCallback = callback || noop;
    Sass._handleFiles(base, directory, files, Sass._handlePreloadFile);
  },


  // allow concurrent task registration, even though we can only execute them in sequence
  _compileQueue: [],
  compile: function(text, _options, callback, _compileFile) {
    if (typeof _options === 'function') {
      callback = _options;
      _options = null;
    }

    if (!callback) {
      throw new Error('Sass.compile() requires callback function as second (or third) parameter!');
    }

    if (_options !== null && typeof _options !== 'object') {
      throw new Error('Sass.compile() requires second argument to be an object (options) or a function (callback)');
    }

    var done = function done(result) {
      var _cleanup = function() {
        // we're done, the next invocation may come
        Sass._sassCompileEmscriptenSuccess = null;
        Sass._sassCompileEmscriptenError = null;
        // we may have buffered compile() calls during execution,
        Sass._compileNext();
      };
      var _done = function() {
        // reset options to what they were before they got temporarily overwritten
        _previousOptions && Sass.options(_previousOptions);
        // make sure we cleanup regardless of what happenes in the callback
        (typeof setImmediate !== 'undefined' ? setImmediate : setTimeout)(_cleanup);
        // announce we're done while still buffering incoming compile() calls
        callback(result);
      };

      // give emscripten a chance to finish the C function and clean up
      // before we resume our JavaScript duties
      (typeof setImmediate !== 'undefined' ? setImmediate : setTimeout)(_done);
    };

    // only one Sass.compile() can run concurrently, wait for the currently running task to finish!
    // Also we need to delay .compile() to when emscripten is ready (if not already the case)
    // doing this *after* the initial sanity checks to maintain API behavior
    // in respect to when/how exceptions are thrown
    if (Sass._sassCompileEmscriptenSuccess || !Sass._initialized) {
      Sass._compileQueue.push([text, _options, callback, _compileFile]);
      return;
    }

    try {
      // temporarily - for the duration of this .compile() - overwrite options
      var _previousOptions = null;
      if (_options) {
        _previousOptions = Sass._cloneOptions();
        Sass.options(_options);
      }

      Sass._sassCompileEmscriptenSuccess = function(result, map, files) {
        done({
          status: 0,
          text: result,
          map: map,
          files: files,
        });
      };

      Sass._sassCompileEmscriptenError = function(error, message) {
        var result = error || {};
        result.formatted = message;
        done(result);
      };

      Module.ccall(
        // C function to call
        'sass_compile_emscripten',
        // return type
        null,
        // parameter types
        [
          'string',
          'string',
          'bool',
          'bool',
        ].concat(options.map(function(option) {
          return option.type;
        })),
        // arguments for invocation
        [
          text,
          Sass._path,
          Number(Boolean(_compileFile)),
          Number(Boolean(Sass._importer)),
        ].concat(options.map(function(option) {
          return Sass._options[option.key];
        })),
        // we're not expecting synchronous return value
        { async: true }
      );
    } catch(e) {
      done({
        status: 99,
        line: null,
        message: e.message,
        error: e
      });
    }
  },
  compileFile: function(filename, _options, callback) {
    var path = Sass._absolutePath(filename);
    if (typeof _options === 'function') {
      callback = _options;
      _options = {};
    }

    _options.sourceMapRoot = path;
    _options.inputPath = path;

    return Sass.compile(path, _options, callback, true);
  },
};

// register options maintained in sass.options.js
options.forEach(function(option) {
  Sass._options[option.key] = Sass._defaultOptions[option.key] = option.initial;
  Sass._optionTypes[option.key] = option.coerce;
});

// until 0.9.6 we used a weird hacky way to get informed by Module.onRuntimeInitialized
// when emscripten was fully loaded. But since 0.9.5 we're not using a separate .mem file
// anymore and emscripten doesn't preload any files for us, so this became irrelevant.

// initialize after emscripten is loaded and the event loop cleared
setTimeout(Sass._ready);

/*global PATH, Sass*/
/*jshint strict:false*/

function isAbsolutePath (path) {
  return path[0] === '/';
}

Sass.getPathVariations = function(path) {
  // [importer,include_path] this is where we would add the ability to
  // examine the include_path (if we ever use that in Sass.js)
  path = PATH.normalize(path);
  var directory = PATH.dirname(path);
  var basename = PATH.basename(path);
  var extensions = ['.scss', '.sass', '.css'];
  // basically what is done by resolve_and_load() in file.cpp
  // Resolution order for ambiguous imports:
  var list = [
    // (1) filename as given
    path,
    // (2) underscore + given
    PATH.resolve(directory, '_' + basename)
  ].concat(extensions.map(function(extension) {
    // (3) underscore + given + extension
    return PATH.resolve(directory, '_' + basename + extension);
  })).concat(extensions.map(function(extension) {
    // (4) given + extension
    return PATH.resolve(directory, basename + extension);
  }));

  if (!isAbsolutePath(path)) {
    // PATH.resolve() makes everything absolute, revert that
    list = list.map(function(item) {
      return isAbsolutePath(item)
        ? item.slice(1)
        : item;
    });
  }

  return list;
};

Sass.findPathVariation = function(stat, path) {
  return Sass.getPathVariations(path).reduce(function(found, path) {
    if (found) {
      return found;
    }

    try {
      stat(path);
      return path;
    } catch(e) {
      return null;
    }
  }, null);
};
return Sass;
}));