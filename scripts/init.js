'use strict';

var items = [
    {id: 'ace', name: 'Ace', image: 'images/ace.png'},
    {id: 'admiral', name: 'Admiral', image: 'images/admiral.png'},
    {id: 'agent-s', name: 'Agent S', image: 'images/agent-s.png'},
    {id: 'agnes', name: 'Agnes', image: 'images/agnes.png'},
    {id: 'aisle', name: 'Aisle', image: 'images/aisle.png'},
    {id: 'al', name: 'Al', image: 'images/al.png'},
    {id: 'alfonso', name: 'Alfonso', image: 'images/alfonso.png'},
    {id: 'alice', name: 'Alice', image: 'images/alice.png'},
    {id: 'alli', name: 'Alli', image: 'images/alli.png'},
    {id: 'amelia', name: 'Amelia', image: 'images/amelia.png'},
    {id: 'anabelle', name: 'Anabelle', image: 'images/anabelle.png'},
    {id: 'analog', name: 'Analog', image: 'images/analog.png'},
    {id: 'anchovy', name: 'Anchovy', image: 'images/anchovy.png'},
    {id: 'angus', name: 'Angus', image: 'images/angus.png'},
    {id: 'anicotti', name: 'Anicotti', image: 'images/anicotti.png'},
    {id: 'ankha', name: 'Ankha', image: 'images/ankha.png'},
    {id: 'annalisa', name: 'Annalisa', image: 'images/annalisa.png'},
    {id: 'annalise', name: 'Annalise', image: 'images/annalise.png'},
    {id: 'antonio', name: 'Antonio', image: 'images/antonio.png'},
    {id: 'apollo', name: 'Apollo', image: 'images/apollo.png'},
    {id: 'apple', name: 'Apple', image: 'images/apple.png'},
    {id: 'astrid', name: 'Astrid', image: 'images/astrid.png'},
    {id: 'aurora', name: 'Aurora', image: 'images/aurora.png'},
    {id: 'ava', name: 'Ava', image: 'images/ava.png'},
    {id: 'avery', name: 'Avery', image: 'images/avery.png'},
    {id: 'axel', name: 'Axel', image: 'images/axel.png'},
    {id: 'aziz', name: 'Aziz', image: 'images/aziz.png'},
    {id: 'baabara', name: 'Baabara', image: 'images/baabara.png'},
    {id: 'bam', name: 'Bam', image: 'images/bam.png'},
    {id: 'bangle', name: 'Bangle', image: 'images/bangle.png'},
    {id: 'barold', name: 'Barold', image: 'images/barold.png'},
    {id: 'bea', name: 'Bea', image: 'images/bea.png'},
    {id: 'beardo', name: 'Beardo', image: 'images/beardo.png'},
    {id: 'beau', name: 'Beau', image: 'images/beau.png'},
    {id: 'becky', name: 'Becky', image: 'images/becky.png'},
    {id: 'bella', name: 'Bella', image: 'images/bella.png'},
    {id: 'belle', name: 'Belle', image: 'images/belle.png'},
    {id: 'benedict', name: 'Benedict', image: 'images/benedict.png'},
    {id: 'benjamin', name: 'Benjamin', image: 'images/benjamin.png'},
    {id: 'bertha', name: 'Bertha', image: 'images/bertha.png'},
    {id: 'bessie', name: 'Bessie', image: 'images/bessie.png'},
    {id: 'bettina', name: 'Bettina', image: 'images/bettina.png'},
    {id: 'betty', name: 'Betty', image: 'images/betty.png'},
    {id: 'bianca', name: 'Bianca', image: 'images/bianca.png'},
    {id: 'biff', name: 'Biff', image: 'images/biff.png'},
    {id: 'big-top', name: 'Big Top', image: 'images/big-top.png'},
    {id: 'bill', name: 'Bill', image: 'images/bill.png'},
    {id: 'billy', name: 'Billy', image: 'images/billy.png'},
    {id: 'biskit', name: 'Biskit', image: 'images/biskit.png'},
    {id: 'bitty', name: 'Bitty', image: 'images/bitty.png'},
    {id: 'blaire', name: 'Blaire', image: 'images/blaire.png'},
    {id: 'blanche', name: 'Blanche', image: 'images/blanche.png'},
    {id: 'bluebear', name: 'Bluebear', image: 'images/bluebear.png'},
    {id: 'bob', name: 'Bob', image: 'images/bob.png'},
    {id: 'bonbon', name: 'Bonbon', image: 'images/bonbon.png'},
    {id: 'bones', name: 'Bones', image: 'images/bones.png'},
    {id: 'boomer', name: 'Boomer', image: 'images/boomer.png'},
    {id: 'boone', name: 'Boone', image: 'images/boone.png'},
    {id: 'boots', name: 'Boots', image: 'images/boots.png'},
    {id: 'boris', name: 'Boris', image: 'images/boris.png'},
    {id: 'bow', name: 'Bow', image: 'images/bow.png'},
    {id: 'boyd', name: 'Boyd', image: 'images/boyd.png'},
    {id: 'bree', name: 'Bree', image: 'images/bree.png'},
    {id: 'broccolo', name: 'Broccolo', image: 'images/broccolo.png'},
    {id: 'broffina', name: 'Broffina', image: 'images/broffina.png'},
    {id: 'bruce', name: 'Bruce', image: 'images/bruce.png'},
    {id: 'bubbles', name: 'Bubbles', image: 'images/bubbles.png'},
    {id: 'buck', name: 'Buck', image: 'images/buck.png'},
    {id: 'bud', name: 'Bud', image: 'images/bud.png'},
    {id: 'bunnie', name: 'Bunnie', image: 'images/bunnie.png'},
    {id: 'butch', name: 'Butch', image: 'images/butch.png'},
    {id: 'buzz', name: 'Buzz', image: 'images/buzz.png'},
    {id: 'cally', name: 'Cally', image: 'images/cally.png'},
    {id: 'camofrog', name: 'Camofrog', image: 'images/camofrog.png'},
    {id: 'canberra', name: 'Canberra', image: 'images/canberra.png'},
    {id: 'candi', name: 'Candi', image: 'images/candi.png'},
    {id: 'carmen-mouse', name: 'Carmen - mouse', image: 'images/carmen-mouse.png'},
    {id: 'carmen-rabbit', name: 'Carmen - rabbit', image: 'images/carmen-rabbit.png'},
    {id: 'caroline', name: 'Caroline', image: 'images/caroline.png'},
    {id: 'carrie', name: 'Carrie', image: 'images/carrie.png'},
    {id: 'carrot', name: 'Carrot', image: 'images/carrot.png'},
    {id: 'cashmere', name: 'Cashmere', image: 'images/cashmere.png'},
    {id: 'cece', name: 'Cece', image: 'images/cece.png'},
    {id: 'celia', name: 'Celia', image: 'images/celia.png'},
    {id: 'cesar', name: 'Cesar', image: 'images/cesar.png'},
    {id: 'chadder', name: 'Chadder', image: 'images/chadder.png'},
    {id: 'chai', name: 'Chai', image: 'images/chai.png'},
    {id: 'champ', name: 'Champ', image: 'images/champ.png'},
    {id: 'champagne', name: 'Champagne', image: 'images/champagne.png'},
    {id: 'charlise', name: 'Charlise', image: 'images/charlise.png'},
    {id: 'chelsea', name: 'Chelsea', image: 'images/chelsea.png'},
    {id: 'cheri', name: 'Cheri', image: 'images/cheri.png'},
    {id: 'cherry', name: 'Cherry', image: 'images/cherry.png'},
    {id: 'chester', name: 'Chester', image: 'images/chester.png'},
    {id: 'chevre', name: 'Chevre', image: 'images/chevre.png'},
    {id: 'chico', name: 'Chico', image: 'images/chico.png'},
    {id: 'chief', name: 'Chief', image: 'images/chief.png'},
    {id: 'chops', name: 'Chops', image: 'images/chops.png'},
    {id: 'chow', name: 'Chow', image: 'images/chow.png'},
    {id: 'chrissy', name: 'Chrissy', image: 'images/chrissy.png'},
    {id: 'chuck', name: 'Chuck', image: 'images/chuck.png'},
    {id: 'clara', name: 'Clara', image: 'images/clara.png'},
    {id: 'claude', name: 'Claude', image: 'images/claude.png'},
    {id: 'claudia', name: 'Claudia', image: 'images/claudia.png'},
    {id: 'clay', name: 'Clay', image: 'images/clay.png'},
    {id: 'cleo', name: 'Cleo', image: 'images/cleo.png'},
    {id: 'clyde', name: 'Clyde', image: 'images/clyde.png'},
    {id: 'coach', name: 'Coach', image: 'images/coach.png'},
    {id: 'cobb', name: 'Cobb', image: 'images/cobb.png'},
    {id: 'coco', name: 'Coco', image: 'images/coco.png'},
    {id: 'cole', name: 'Cole', image: 'images/cole.png'},
    {id: 'colton', name: 'Colton', image: 'images/colton.png'},
    {id: 'cookie', name: 'Cookie', image: 'images/cookie.png'},
    {id: 'cousteau', name: 'Cousteau', image: 'images/cousteau.png'},
    {id: 'cranston', name: 'Cranston', image: 'images/cranston.png'},
    {id: 'croque', name: 'Croque', image: 'images/croque.png'},
    {id: 'cube', name: 'Cube', image: 'images/cube.png'},
    {id: 'cupcake', name: 'Cupcake', image: 'images/cupcake.png'},
    {id: 'curlos', name: 'Curlos', image: 'images/curlos.png'},
    {id: 'curly', name: 'Curly', image: 'images/curly.png'},
    {id: 'curt', name: 'Curt', image: 'images/curt.png'},
    {id: 'cyrano', name: 'Cyrano', image: 'images/cyrano.png'},
    {id: 'daisy', name: 'Daisy', image: 'images/daisy.png'},
    {id: 'deeny', name: 'Deeny', image: 'images/deeny.png'},
    {id: 'deirdre', name: 'Deirdre', image: 'images/deirdre.png'},
    {id: 'del', name: 'Del', image: 'images/del.png'},
    {id: 'deli', name: 'Deli', image: 'images/deli.png'},
    {id: 'derwin', name: 'Derwin', image: 'images/derwin.png'},
    {id: 'diana', name: 'Diana', image: 'images/diana.png'},
    {id: 'diva', name: 'Diva', image: 'images/diva.png'},
    {id: 'dizzy', name: 'Dizzy', image: 'images/dizzy.png'},
    {id: 'dobie', name: 'Dobie', image: 'images/dobie.png'},
    {id: 'dora', name: 'Dora', image: 'images/dora.png'},
    {id: 'dotty', name: 'Dotty', image: 'images/dotty.png'},
    {id: 'dozer', name: 'Dozer', image: 'images/dozer.png'},
    {id: 'drago', name: 'Drago', image: 'images/drago.png'},
    {id: 'drake', name: 'Drake', image: 'images/drake.png'},
    {id: 'drift', name: 'Drift', image: 'images/drift.png'},
    {id: 'ed', name: 'Ed', image: 'images/ed.png'},
    {id: 'egbert', name: 'Egbert', image: 'images/egbert.png'},
    {id: 'elina', name: 'Elina', image: 'images/elina.png'},
    {id: 'elise', name: 'Elise', image: 'images/elise.png'},
    {id: 'ellie', name: 'Ellie', image: 'images/ellie.png'},
    {id: 'elmer', name: 'Elmer', image: 'images/elmer.png'},
    {id: 'eloise', name: 'Eloise', image: 'images/eloise.png'},
    {id: 'elvis', name: 'Elvis', image: 'images/elvis.png'},
    {id: 'emerald', name: 'Emerald', image: 'images/emerald.png'},
    {id: 'epona', name: 'Epona', image: 'images/epona.png'},
    {id: 'erik', name: 'Erik', image: 'images/erik.png'},
    {id: 'etoile', name: 'Etoile', image: 'images/etoile.png'},
    {id: 'eugene', name: 'Eugene', image: 'images/eugene.png'},
    {id: 'eunice', name: 'Eunice', image: 'images/eunice.png'},
    {id: 'faith', name: 'Faith', image: 'images/faith.png'},
    {id: 'fang', name: 'Fang', image: 'images/fang.png'},
    {id: 'fauna', name: 'Fauna', image: 'images/fauna.png'},
    {id: 'felicity', name: 'Felicity', image: 'images/felicity.png'},
    {id: 'felyne', name: 'Felyne', image: 'images/felyne.png'},
    {id: 'filbert', name: 'Filbert', image: 'images/filbert.png'},
    {id: 'filly', name: 'Filly', image: 'images/filly.png'},
    {id: 'flash', name: 'Flash', image: 'images/flash.png'},
    {id: 'flip', name: 'Flip', image: 'images/flip.png'},
    {id: 'flo', name: 'Flo', image: 'images/flo.png'},
    {id: 'flora', name: 'Flora', image: 'images/flora.png'},
    {id: 'flossie', name: 'Flossie', image: 'images/flossie.png'},
    {id: 'flurry', name: 'Flurry', image: 'images/flurry.png'},
    {id: 'francine', name: 'Francine', image: 'images/francine.png'},
    {id: 'frank', name: 'Frank', image: 'images/frank.png'},
    {id: 'freckles', name: 'Freckles', image: 'images/freckles.png'},
    {id: 'freya', name: 'Freya', image: 'images/freya.png'},
    {id: 'friga', name: 'Friga', image: 'images/friga.png'},
    {id: 'frita', name: 'Frita', image: 'images/frita.png'},
    {id: 'frobert', name: 'Frobert', image: 'images/frobert.png'},
    {id: 'fruity', name: 'Fruity', image: 'images/fruity.png'},
    {id: 'fuchsia', name: 'Fuchsia', image: 'images/fuchsia.png'},
    {id: 'gabi', name: 'Gabi', image: 'images/gabi.png'},
    {id: 'gala', name: 'Gala', image: 'images/gala.png'},
    {id: 'ganon', name: 'Ganon', image: 'images/ganon.png'},
    {id: 'gaston', name: 'Gaston', image: 'images/gaston.png'},
    {id: 'gayle', name: 'Gayle', image: 'images/gayle.png'},
    {id: 'gen', name: 'Gen', image: 'images/gen.png'},
    {id: 'genji', name: 'Genji', image: 'images/genji.png'},
    {id: 'gigi', name: 'Gigi', image: 'images/gigi.png'},
    {id: 'gladys', name: 'Gladys', image: 'images/gladys.png'},
    {id: 'gloria', name: 'Gloria', image: 'images/gloria.png'},
    {id: 'goldie', name: 'Goldie', image: 'images/goldie.png'},
    {id: 'gonzo', name: 'Gonzo', image: 'images/gonzo.png'},
    {id: 'goose', name: 'Goose', image: 'images/goose.png'},
    {id: 'graham', name: 'Graham', image: 'images/graham.png'},
    {id: 'greta', name: 'Greta', image: 'images/greta.png'},
    {id: 'grizzly', name: 'Grizzly', image: 'images/grizzly.png'},
    {id: 'groucho', name: 'Groucho', image: 'images/groucho.png'},
    {id: 'gruff', name: 'Gruff', image: 'images/gruff.png'},
    {id: 'gwen', name: 'Gwen', image: 'images/gwen.png'},
    {id: 'hambo', name: 'Hambo', image: 'images/hambo.png'},
    {id: 'hamlet', name: 'Hamlet', image: 'images/hamlet.png'},
    {id: 'hamphrey', name: 'Hamphrey', image: 'images/hamphrey.png'},
    {id: 'hank', name: 'Hank', image: 'images/hank.png'},
    {id: 'hans', name: 'Hans', image: 'images/hans.png'},
    {id: 'harry', name: 'Harry', image: 'images/harry.png'},
    {id: 'hazel', name: 'Hazel', image: 'images/hazel.png'},
    {id: 'hector', name: 'Hector', image: 'images/hector.png'},
    {id: 'henry', name: 'Henry', image: 'images/henry.png'},
    {id: 'hippeux', name: 'Hippeux', image: 'images/hippeux.png'},
    {id: 'holden', name: 'Holden', image: 'images/holden.png'},
    {id: 'hopkins', name: 'Hopkins', image: 'images/hopkins.png'},
    {id: 'hopper', name: 'Hopper', image: 'images/hopper.png'},
    {id: 'hornsby', name: 'Hornsby', image: 'images/hornsby.png'},
    {id: 'huck', name: 'Huck', image: 'images/huck.png'},
    {id: 'huggy', name: 'Huggy', image: 'images/huggy.png'},
    {id: 'hugh', name: 'Hugh', image: 'images/hugh.png'},
    {id: 'iggly', name: 'Iggly', image: 'images/iggly.png'},
    {id: 'iggy', name: 'Iggy', image: 'images/iggy.png'},
    {id: 'ike', name: 'Ike', image: 'images/ike.png'},
    {id: 'inkwell', name: 'Inkwell', image: 'images/inkwell.png'},
    {id: 'jacques', name: 'Jacques', image: 'images/jacques.png'},
    {id: 'jacob', name: 'Jacob', image: 'images/jacob.png'},
    {id: 'jambette', name: 'Jambette', image: 'images/jambette.png'},
    {id: 'jane', name: 'Jane', image: 'images/jane.png'},
    {id: 'jay', name: 'Jay', image: 'images/jay.png'},
    {id: 'jeremiah', name: 'Jeremiah', image: 'images/jeremiah.png'},
    {id: 'jitters', name: 'Jitters', image: 'images/jitters.png'},
    {id: 'joe', name: 'Joe', image: 'images/joe.png'},
    {id: 'joey', name: 'Joey', image: 'images/joey.png'},
    {id: 'jubei', name: 'Jubei', image: 'images/jubei.png'},
    {id: 'julia', name: 'Julia', image: 'images/julia.png'},
    {id: 'julian', name: 'Julian', image: 'images/julian.png'},
    {id: 'june', name: 'June', image: 'images/june.png'},
    {id: 'kabuki', name: 'Kabuki', image: 'images/kabuki.png'},
    {id: 'katt', name: 'Katt', image: 'images/katt.png'},
    {id: 'keaton', name: 'Keaton', image: 'images/keaton.png'},
    {id: 'ken', name: 'Ken', image: 'images/ken.png'},
    {id: 'ketchup', name: 'Ketchup', image: 'images/ketchup.png'},
    {id: 'kevin', name: 'Kevin', image: 'images/kevin.png'},
    {id: 'kid-cat', name: 'Kid Cat', image: 'images/kid-cat.png'},
    {id: 'kidd', name: 'Kidd', image: 'images/kidd.png'},
    {id: 'kiki', name: 'Kiki', image: 'images/kiki.png'},
    {id: 'kit', name: 'Kit', image: 'images/kit.png'},
    {id: 'kitt', name: 'Kitt', image: 'images/kitt.png'},
    {id: 'kitty', name: 'Kitty', image: 'images/kitty.png'},
    {id: 'klaus', name: 'Klaus', image: 'images/klaus.png'},
    {id: 'knox', name: 'Knox', image: 'images/knox.png'},
    {id: 'kody', name: 'Kody', image: 'images/kody.png'},
    {id: 'koharu', name: 'Koharu', image: 'images/koharu.png'},
    {id: 'kyle', name: 'Kyle', image: 'images/kyle.png'},
    {id: 'leigh', name: 'Leigh', image: 'images/leigh.png'},
    {id: 'leonardo', name: 'Leonardo', image: 'images/leonardo.png'},
    {id: 'leopold', name: 'Leopold', image: 'images/leopold.png'},
    {id: 'lily', name: 'Lily', image: 'images/lily.png'},
    {id: 'limberg', name: 'Limberg', image: 'images/limberg.png'},
    {id: 'lionel', name: 'Lionel', image: 'images/lionel.png'},
    {id: 'liz', name: 'Liz', image: 'images/liz.png'},
    {id: 'lobo', name: 'Lobo', image: 'images/lobo.png'},
    {id: 'lolly', name: 'Lolly', image: 'images/lolly.png'},
    {id: 'lopez', name: 'Lopez', image: 'images/lopez.png'},
    {id: 'louie', name: 'Louie', image: 'images/louie.png'},
    {id: 'lucha', name: 'Lucha', image: 'images/lucha.png'},
    {id: 'lucky', name: 'Lucky', image: 'images/lucky.png'},
    {id: 'lucy', name: 'Lucy', image: 'images/lucy.png'},
    {id: 'lulu-anteater', name: 'Lulu - anteater', image: 'images/lulu-anteater.png'},
    {id: 'lulu-hippo', name: 'Lulu - hippo', image: 'images/lulu-hippo.png'},
    {id: 'lyman', name: 'Lyman', image: 'images/lyman.png'},
    {id: 'mac', name: 'Mac', image: 'images/mac.png'},
    {id: 'madam-rosa', name: 'Madam Rosa', image: 'images/madam-rosa.png'},
    {id: 'maddie', name: 'Maddie', image: 'images/maddie.png'},
    {id: 'maelle', name: 'Maelle', image: 'images/maelle.png'},
    {id: 'maggie', name: 'Maggie', image: 'images/maggie.png'},
    {id: 'mallary', name: 'Mallary', image: 'images/mallary.png'},
    {id: 'maple', name: 'Maple', image: 'images/maple.png'},
    {id: 'marcel', name: 'Marcel', image: 'images/marcel.png'},
    {id: 'marcie', name: 'Marcie', image: 'images/marcie.png'},
    {id: 'marcy', name: 'Marcy', image: 'images/marcy.png'},
    {id: 'margie', name: 'Margie', image: 'images/margie.png'},
    {id: 'marina', name: 'Marina', image: 'images/marina.png'},
    {id: 'marshal', name: 'Marshal', image: 'images/marshal.png'},
    {id: 'marty', name: 'Marty', image: 'images/marty.png'},
    {id: 'masa', name: 'Masa', image: 'images/masa.png'},
    {id: 'mathilda', name: 'Mathilda', image: 'images/mathilda.png'},
    {id: 'medli', name: 'Medli', image: 'images/medli.png'},
    {id: 'megumi', name: 'Megumi', image: 'images/megumi.png'},
    {id: 'melba', name: 'Melba', image: 'images/melba.png'},
    {id: 'meow', name: 'Meow', image: 'images/meow.png'},
    {id: 'merengue', name: 'Merengue', image: 'images/merengue.png'},
    {id: 'merry', name: 'Merry', image: 'images/merry.png'},
    {id: 'midge', name: 'Midge', image: 'images/midge.png'},
    {id: 'mint', name: 'Mint', image: 'images/mint.png'},
    {id: 'mira', name: 'Mira', image: 'images/mira.png'},
    {id: 'miranda', name: 'Miranda', image: 'images/miranda.png'},
    {id: 'mitzi', name: 'Mitzi', image: 'images/mitzi.png'},
    {id: 'moe', name: 'Moe', image: 'images/moe.png'},
    {id: 'molly', name: 'Molly', image: 'images/molly.png'},
    {id: 'monique', name: 'Monique', image: 'images/monique.png'},
    {id: 'monty', name: 'Monty', image: 'images/monty.png'},
    {id: 'moose', name: 'Moose', image: 'images/moose.png'},
    {id: 'mott', name: 'Mott', image: 'images/mott.png'},
    {id: 'muffy', name: 'Muffy', image: 'images/muffy.png'},
    {id: 'murphy', name: 'Murphy', image: 'images/murphy.png'},
    {id: 'nan', name: 'Nan', image: 'images/nan.png'},
    {id: 'nana', name: 'Nana', image: 'images/nana.png'},
    {id: 'naomi', name: 'Naomi', image: 'images/naomi.png'},
    {id: 'nate', name: 'Nate', image: 'images/nate.png'},
    {id: 'nibbles', name: 'Nibbles', image: 'images/nibbles.png'},
    {id: 'nindori', name: 'Nindori', image: 'images/nindori.png'},
    {id: 'nobuo', name: 'Nobuo', image: 'images/nobuo.png'},
    {id: 'norma', name: 'Norma', image: 'images/norma.png'},
    {id: 'nosegay', name: 'Nosegay', image: 'images/nosegay.png'},
    {id: 'o-hare', name: 'O\'Hare', image: 'images/o-hare.png'},
    {id: 'octavian', name: 'Octavian', image: 'images/octavian.png'},
    {id: 'olaf', name: 'Olaf', image: 'images/olaf.png'},
    {id: 'olive', name: 'Olive', image: 'images/olive.png'},
    {id: 'olivia', name: 'Olivia', image: 'images/olivia.png'},
    {id: 'opal', name: 'Opal', image: 'images/opal.png'},
    {id: 'otis', name: 'Otis', image: 'images/otis.png'},
    {id: 'oxford', name: 'Oxford', image: 'images/oxford.png'},
    {id: 'ozzie', name: 'Ozzie', image: 'images/ozzie.png'},
    {id: 'pancetti', name: 'Pancetti', image: 'images/pancetti.png'},
    {id: 'pango', name: 'Pango', image: 'images/pango.png'},
    {id: 'paolo', name: 'Paolo', image: 'images/paolo.png'},
    {id: 'papi', name: 'Papi', image: 'images/papi.png'},
    {id: 'pashmina', name: 'Pashmina', image: 'images/pashmina.png'},
    {id: 'pate', name: 'Pate', image: 'images/pate.png'},
    {id: 'patricia', name: 'Patricia', image: 'images/patricia.png'},
    {id: 'patty', name: 'Patty', image: 'images/patty.png'},
    {id: 'paula', name: 'Paula', image: 'images/paula.png'},
    {id: 'peaches', name: 'Peaches', image: 'images/peaches.png'},
    {id: 'peanut', name: 'Peanut', image: 'images/peanut.png'},
    {id: 'pecan', name: 'Pecan', image: 'images/pecan.png'},
    {id: 'peck', name: 'Peck', image: 'images/peck.png'},
    {id: 'peewee', name: 'Peewee', image: 'images/peewee.png'},
    {id: 'peggy', name: 'Peggy', image: 'images/peggy.png'},
    {id: 'pekoe', name: 'Pekoe', image: 'images/pekoe.png'},
    {id: 'penelope', name: 'Penelope', image: 'images/penelope.png'},
    {id: 'penny', name: 'Penny', image: 'images/penny.png'},
    {id: 'petunia-cow', name: 'Petunia - cow', image: 'images/petunia-cow.png'},
    {id: 'petunia-rhino', name: 'Petunia - rhino', image: 'images/petunia-rhino.png'},
    {id: 'phil', name: 'Phil', image: 'images/phil.png'},
    {id: 'phoebe', name: 'Phoebe', image: 'images/phoebe.png'},
    {id: 'pierce', name: 'Pierce', image: 'images/pierce.png'},
    {id: 'pierre', name: 'Pierre', image: 'images/pierre.png'},
    {id: 'pietro', name: 'Pietro', image: 'images/pietro.png'},
    {id: 'pigleg', name: 'Pigleg', image: 'images/pigleg.png'},
    {id: 'pinky', name: 'Pinky', image: 'images/pinky.png'},
    {id: 'piper', name: 'Piper', image: 'images/piper.png'},
    {id: 'pippy', name: 'Pippy', image: 'images/pippy.png'},
    {id: 'pironkon', name: 'Pironkon', image: 'images/pironkon.png'},
    {id: 'plucky', name: 'Plucky', image: 'images/plucky.png'},
    {id: 'poko', name: 'Poko', image: 'images/poko.png'},
    {id: 'pompom', name: 'Pompom', image: 'images/pompom.png'},
    {id: 'poncho', name: 'Poncho', image: 'images/poncho.png'},
    {id: 'poppy', name: 'Poppy', image: 'images/poppy.png'},
    {id: 'portia', name: 'Portia', image: 'images/portia.png'},
    {id: 'prince', name: 'Prince', image: 'images/prince.png'},
    {id: 'puck', name: 'Puck', image: 'images/puck.png'},
    {id: 'puddles', name: 'Puddles', image: 'images/puddles.png'},
    {id: 'pudge', name: 'Pudge', image: 'images/pudge.png'},
    {id: 'punchy', name: 'Punchy', image: 'images/punchy.png'},
    {id: 'purrl', name: 'Purrl', image: 'images/purrl.png'},
    {id: 'queenie', name: 'Queenie', image: 'images/queenie.png'},
    {id: 'quetzal', name: 'Quetzal', image: 'images/quetzal.png'},
    {id: 'quillson', name: 'Quillson', image: 'images/quillson.png'},
    {id: 'raddle', name: 'Raddle', image: 'images/raddle.png'},
    {id: 'rasher', name: 'Rasher', image: 'images/rasher.png'},
    {id: 'renee', name: 'Renee', image: 'images/renee.png'},
    {id: 'rex', name: 'Rex', image: 'images/rex.png'},
    {id: 'rhoda', name: 'Rhoda', image: 'images/rhoda.png'},
    {id: 'rhonda', name: 'Rhonda', image: 'images/rhonda.png'},
    {id: 'ribbot', name: 'Ribbot', image: 'images/ribbot.png'},
    {id: 'ricky', name: 'Ricky', image: 'images/ricky.png'},
    {id: 'rilla', name: 'Rilla', image: 'images/rilla.png'},
    {id: 'rio', name: 'Rio', image: 'images/rio.png'},
    {id: 'rizzo', name: 'Rizzo', image: 'images/rizzo.png'},
    {id: 'roald', name: 'Roald', image: 'images/roald.png'},
    {id: 'robin', name: 'Robin', image: 'images/robin.png'},
    {id: 'rocco', name: 'Rocco', image: 'images/rocco.png'},
    {id: 'rocket', name: 'Rocket', image: 'images/rocket.png'},
    {id: 'rod', name: 'Rod', image: 'images/rod.png'},
    {id: 'rodeo', name: 'Rodeo', image: 'images/rodeo.png'},
    {id: 'rodney', name: 'Rodney', image: 'images/rodney.png'},
    {id: 'rolf', name: 'Rolf', image: 'images/rolf.png'},
    {id: 'rollo', name: 'Rollo', image: 'images/rollo.png'},
    {id: 'rooney', name: 'Rooney', image: 'images/rooney.png'},
    {id: 'rory', name: 'Rory', image: 'images/rory.png'},
    {id: 'roscoe', name: 'Roscoe', image: 'images/roscoe.png'},
    {id: 'rosie', name: 'Rosie', image: 'images/rosie.png'},
    {id: 'rowan', name: 'Rowan', image: 'images/rowan.png'},
    {id: 'ruby', name: 'Ruby', image: 'images/ruby.png'},
    {id: 'rudy', name: 'Rudy', image: 'images/rudy.png'},
    {id: 'sally', name: 'Sally', image: 'images/sally.png'},
    {id: 'samson', name: 'Samson', image: 'images/samson.png'},
    {id: 'sandy', name: 'Sandy', image: 'images/sandy.png'},
    {id: 'savannah', name: 'Savannah', image: 'images/savannah.png'},
    {id: 'scoot', name: 'Scoot', image: 'images/scoot.png'},
    {id: 'shari', name: 'Shari', image: 'images/shari.png'},
    {id: 'sheldon', name: 'Sheldon', image: 'images/sheldon.png'},
    {id: 'shep', name: 'Shep', image: 'images/shep.png'},
    {id: 'shinabiru', name: 'Shinabiru', image: 'images/shinabiru.png'},
    {id: 'shoukichi', name: 'Shoukichi', image: 'images/shoukichi.png'},
    {id: 'simon', name: 'Simon', image: 'images/simon.png'},
    {id: 'skye', name: 'Skye', image: 'images/skye.png'},
    {id: 'sly', name: 'Sly', image: 'images/sly.png'},
    {id: 'snake', name: 'Snake', image: 'images/snake.png'},
    {id: 'snooty', name: 'Snooty', image: 'images/snooty.png'},
    {id: 'soleil', name: 'Soleil', image: 'images/soleil.png'},
    {id: 'sparro', name: 'Sparro', image: 'images/sparro.png'},
    {id: 'spike', name: 'Spike', image: 'images/spike.png'},
    {id: 'spork', name: 'Spork', image: 'images/spork.png'},
    {id: 'sprinkle', name: 'Sprinkle', image: 'images/sprinkle.png'},
    {id: 'sprocket', name: 'Sprocket', image: 'images/sprocket.png'},
    {id: 'static', name: 'Static', image: 'images/static.png'},
    {id: 'stella', name: 'Stella', image: 'images/stella.png'},
    {id: 'sterling', name: 'Sterling', image: 'images/sterling.png'},
    {id: 'stinky', name: 'Stinky', image: 'images/stinky.png'},
    {id: 'stitches', name: 'Stitches', image: 'images/stitches.png'},
    {id: 'stu', name: 'Stu', image: 'images/stu.png'},
    {id: 'sue-e', name: 'Sue E', image: 'images/sue-e.png'},
    {id: 'sunny', name: 'Sunny', image: 'images/sunny.png'},
    {id: 'sven', name: 'Sven', image: 'images/sven.png'},
    {id: 'sydney', name: 'Sydney', image: 'images/sydney.png'},
    {id: 'sylvana', name: 'Sylvana', image: 'images/sylvana.png'},
    {id: 'sylvia', name: 'Sylvia', image: 'images/sylvia.png'},
    {id: 't-bone', name: 'T-Bone', image: 'images/t-bone.png'},
    {id: 'tabby', name: 'Tabby', image: 'images/tabby.png'},
    {id: 'tad', name: 'Tad', image: 'images/tad.png'},
    {id: 'tammi', name: 'Tammi', image: 'images/tammi.png'},
    {id: 'tammy', name: 'Tammy', image: 'images/tammy.png'},
    {id: 'tangy', name: 'Tangy', image: 'images/tangy.png'},
    {id: 'tank', name: 'Tank', image: 'images/tank.png'},
    {id: 'tarou', name: 'Tarou', image: 'images/tarou.png'},
    {id: 'tasha', name: 'Tasha', image: 'images/tasha.png'},
    {id: 'teddy', name: 'Teddy', image: 'images/teddy.png'},
    {id: 'tex', name: 'Tex', image: 'images/tex.png'},
    {id: 'tia', name: 'Tia', image: 'images/tia.png'},
    {id: 'tiara', name: 'Tiara', image: 'images/tiara.png'},
    {id: 'tiffany', name: 'Tiffany', image: 'images/tiffany.png'},
    {id: 'timbra', name: 'Timbra', image: 'images/timbra.png'},
    {id: 'tipper', name: 'Tipper', image: 'images/tipper.png'},
    {id: 'toby', name: 'Toby', image: 'images/toby.png'},
    {id: 'tom', name: 'Tom', image: 'images/tom.png'},
    {id: 'truffles', name: 'Truffles', image: 'images/truffles.png'},
    {id: 'tucker', name: 'Tucker', image: 'images/tucker.png'},
    {id: 'tutu', name: 'Tutu', image: 'images/tutu.png'},
    {id: 'twiggy', name: 'Twiggy', image: 'images/twiggy.png'},
    {id: 'twrip', name: 'Twrip', image: 'images/twrip.png'},
    {id: 'tybalt', name: 'Tybalt', image: 'images/tybalt.png'},
    {id: 'ursala', name: 'Ursala', image: 'images/ursala.png'},
    {id: 'valise', name: 'Valise', image: 'images/valise.png'},
    {id: 'velma', name: 'Velma', image: 'images/velma.png'},
    {id: 'verdun', name: 'Verdun', image: 'images/verdun.png'},
    {id: 'vesta', name: 'Vesta', image: 'images/vesta.png'},
    {id: 'vic', name: 'Vic', image: 'images/vic.png'},
    {id: 'viche', name: 'Viche', image: 'images/viche.png'},
    {id: 'victoria', name: 'Victoria', image: 'images/victoria.png'},
    {id: 'violet', name: 'Violet', image: 'images/violet.png'},
    {id: 'vivian', name: 'Vivian', image: 'images/vivian.png'},
    {id: 'vladimir', name: 'Vladimir', image: 'images/vladimir.png'},
    {id: 'w-link', name: 'W. Link', image: 'images/w-link.png'},
    {id: 'wade', name: 'Wade', image: 'images/wade.png'},
    {id: 'walker', name: 'Walker', image: 'images/walker.png'},
    {id: 'walt', name: 'Walt', image: 'images/walt.png'},
    {id: 'wart-jr', name: 'Wart Jr', image: 'images/wart-jr.png'},
    {id: 'weber', name: 'Weber', image: 'images/weber.png'},
    {id: 'wendy', name: 'Wendy', image: 'images/wendy.png'},
    {id: 'whitney', name: 'Whitney', image: 'images/whitney.png'},
    {id: 'willow', name: 'Willow', image: 'images/willow.png'},
    {id: 'winnie', name: 'Winnie', image: 'images/winnie.png'},
    {id: 'wolfgang', name: 'Wolfgang', image: 'images/wolfgang.png'},
    {id: 'woolio', name: 'Woolio', image: 'images/woolio.png'},
    {id: 'yodel', name: 'Yodel', image: 'images/yodel.png'},
    {id: 'yuka', name: 'Yuka', image: 'images/yuka.png'},
    {id: 'zell', name: 'Zell', image: 'images/zell.png'},
    {id: 'zoe', name: 'Zoe', image: 'images/zoe.png'},
    {id: 'zucker', name: 'Zucker', image: 'images/zucker.png'}
]

var myPicker = new picker.Picker({
    items: items
});

var pickerUI = new PickerUI(myPicker, {
    elements: {
        pick: "#pick",
        pass: "#pass",
        undo: "#undo",
        redo: "#redo",
        evaluating: "#evaluating",
        favorites: "#favorites",
        shortcodeLink: "#shortcode-link",
        sharedListContainer: "#shared-list-modal",
        sharedList: "#shared-list",
        sharedListContinue: "#shared-list-continue",
        sharedListSkip: ".shared-list-skip",
        settings: {
            minBatchSize: '#min-batch-size',
            maxBatchSize: '#max-batch-size'
        }
    }
});

pickerUI.initialize();

/* Sortable favorites - you can safely remove this, and the Sortable.min.js script, if you don't want to be able to sort your favorite list. */
var sortable = new Sortable(pickerUI.elem.favorites.get(0), {
    draggable: '.item',
    animation: 100,
    onStart: function() {
        pickerUI.elem.favorites.addClass("sorting");
    },
    onEnd: function() {
        pickerUI.elem.favorites.removeClass("sorting");
    },
    onUpdate: function() {
        myPicker.setFavorites(pickerUI.elem.favorites.children().map(function() {
            return pickerUI.getItem(this);
        }).get());
        pickerUI.update(true);
    }
});
/* End sortable favorites */

/* Toggle settings block */
$(".toggle").on('click', function() {
    $($(this).attr("href")).slideToggle();
    return false;
});

